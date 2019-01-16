const express = require("express");
const router = express.Router();
const knex = require("../db/connection");

function getUsers(){
  return knex('virgeo_user')
  .select(
    'virgeo_user.id as virgeo_user_id',
     'virgeo_user.user_name',
     'virgeo_user.full_name',
		 'virgeo_user.level',
     'virgeo_user.avatar_id'
   )
}

function avatarUserJoin(user){
  return knex('avatar')
    .select(
      'avatar.avatar_name'
    )
    .innerJoin('virgeo_user', 'avatar.id', 'virgeo_user.avatar_id')
    .whereIn('avatar.id', [user.avatar_id])
}

function objectUserJoin(user){
  return knex('user_object')
    .select(
      'user_object.id as user_object_id',
      'object.id as object_id',
      'object.object_name',
      'object.category'
    )
    .innerJoin('object', 'object.id', 'user_object.object_id')
    .whereIn('user_object.virgeo_user_id', [user.virgeo_user_id])
}

router.get('/', (req, res, next) => {
	function getObjectsForUsers(){
		return getUsers()
			.then(function(users){
				return Promise.all(users.map(async (user)=> {
            user.avatar_info = await avatarUserJoin(user)
						user.objects = await objectUserJoin(user)
						return user
					})
				)
			}).then(virgeo_users => {
					return res.json({ virgeo_users })
				})
	}
	getObjectsForUsers()
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const intCheck = parseInt(id);

  function getUser(){
		return knex('virgeo_user')
      .select(
        'virgeo_user.id as virgeo_user_id',
         'virgeo_user.user_name',
         'virgeo_user.full_name',
         'virgeo_user.level',
         'virgeo_user.avatar_id'
       )
			.where('id', id)
	}

  function getUserWithObj(){
    return getUser()
      .then(function(users){
        return Promise.all(users.map(async (user)=> {
            user.avatar_info = await avatarUserJoin(user)
            user.objects = await objectUserJoin(user)
            return user
          })
        )
      }).then(user => {
          res.json({ user })
      })
  }
  getUserWithObj()
})

router.post('/', (req, res, next) => {
    const body = req.body;
    knex('virgeo_user')
      .insert(body)
      .returning('*')
      .then(virgeo_user => {
        res.json({ virgeo_user: virgeo_user[0] });
    }).catch(next)
});

router.delete('/:id', (req, res, next) => {
		const id = req.params.id
    knex('virgeo_user')
    	.where('id', id)
			.del()
    	.returning('*')
    	.then(virgeo_user => {
        if(!virgeo_user.length){
          return next()
        }
				res.json({ virgeo_user: virgeo_user[0] });
    }).catch(next)
});

module.exports = router
