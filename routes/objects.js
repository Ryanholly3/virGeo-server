const express = require("express");
const router = express.Router();
const knex = require("../db/connection");

router.get('/', (req, res, next) => {
	knex('object')
    .then(objects => {
		  res.json({ objects })
		}).catch(next)
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
	knex('object')
    .where('id', id)
    .then(object => {
      if(!object.length){
        return next()
      }
			res.json({ object: object[0] })
		}).catch(next)
})

router.post('/', (req, res, next) => {
    const body = req.body;
    knex('object')
      .insert(body)
      .returning('*')
      .then(object => {
        res.json({ object: object[0] });
    }).catch(next)
});

router.delete('/:id', (req, res, next) => {
		const id = req.params.id
    knex('object')
    	.where('id', id)
			.del()
    	.returning('*')
    	.then(object => {
        if(!object.length){
          return next()
        }
				res.json({ object: object[0] });
    }).catch(next)
});

module.exports = router
