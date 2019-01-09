const express = require("express");
const router = express.Router();
const knex = require("../db/connection");

router.get('/', (req, res, next) => {
	knex('virgeo_user')
    .then(virgeo_users => {
		  res.status(200).json({ virgeo_users })
		}).catch(next)
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
	knex('virgeo_user')
    .where('id', id)
    .then(virgeo_user => {
      if(!virgeo_user.length){
        return next()
      }
			res.json({ virgeo_user: virgeo_user[0] })
		}).catch(next)
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
