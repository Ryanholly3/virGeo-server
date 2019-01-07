const express = require("express");
const router = express.Router();
const knex = require("../db/connection");

router.get('/', (req, res) => {
	knex('object')
    .then(object => {
		  res.json({ object })
		})
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
	knex('object')
    .where('id', id)
    .then(object => {
      if(!object.length){
        next()
      } res.json({ object: object[0] })
		})
})

router.post('/', (req, res, next) => {
    const body = req.body;
    knex('object')
      .insert(body)
      .returning('*')
      .then(object => {
        res.json({ object: object[0] });
    });
});

router.delete('/:id', (req, res, next) => {
		const id = req.params.id
    knex('object')
    	.where('id', id)
			.del()
    	.returning('*')
    	.then(object => {
        if(!object.length){
          next()
        } res.json({ object: object[0] });
    });
});

module.exports = router
