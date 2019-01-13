const express = require("express");
const router = express.Router();
const knex = require("../db/connection");

router.get('/', (req, res, next) => {
	knex('avatar')
    .then(avatars => {
		  res.json({ avatars })
		}).catch(next)
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
	knex('avatar')
    .where('id', id)
    .then(avatar => {
      if(!avatar.length){
        return next()
      }
			res.json({ avatar: avatar[0] })
		}).catch(next)
})

router.post('/', (req, res, next) => {
    const body = req.body;
    knex('avatar')
      .insert(avatar)
      .returning('*')
      .then(avatar => {
        res.json({ avatar: avatar[0] });
    }).catch(next)
});

router.delete('/:id', (req, res, next) => {
		const id = req.params.id
    knex('avatar')
    	.where('id', id)
			.del()
    	.returning('*')
    	.then(avatar => {
        if(!avatar.length){
          return next()
        }
				res.json({ avatar: avatar[0] });
    }).catch(next)
});

module.exports = router
