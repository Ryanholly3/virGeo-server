const express = require("express");
const router = express.Router();
const knex = require("../db/connection");

router.get('/', (req, res, next) => {
	knex('user_object')
    .then(user_objects => {
		  res.json({ user_objects })
		}).catch(next)
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
	knex('user_object')
    .where('id', id)
    .then(user_object => {
      if(!user_object.length){
        return next()
      }
			res.json({ user_object: user_object[0] })
		}).catch(next)
})

router.post('/', (req, res, next) => {
    const body = req.body;
    knex('user_object')
      .insert(body)
      .returning('*')
      .then(user_object => {
        res.json({ user_object: user_object[0] });
    }).catch(next)
});

router.delete('/:id', (req, res, next) => {
		const id = req.params.id
    knex('user_object')
    	.where('id', id)
			.del()
    	.returning('*')
    	.then(user_object => {
        if(!user_object.length){
          return next()
        }
				res.json({ user_object: user_object[0] });
    }).catch(next)
});

module.exports = router
