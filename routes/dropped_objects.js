const express = require("express");
const router = express.Router();
const knex = require("../db/connection");

router.get('/', (req, res) => {
	knex('dropped_object')
    .then(dropped_object => {
		  res.json({ dropped_object })
		})
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
	knex('dropped_object')
    .where('id', id)
    .then(dropped_object => {
      if(!dropped_object.length){
        next()
      } res.json({ dropped_object: dropped_object[0] })
		})
})

router.post('/', (req, res, next) => {
    const body = req.body;
    knex('dropped_object')
      .insert(body)
      .returning('*')
      .then(dropped_object => {
        res.json({ dropped_object: dropped_object[0] });
    });
});

router.delete('/:id', (req, res, next) => {
		const id = req.params.id
    knex('dropped_object')
    	.where('id', id)
			.del()
    	.returning('*')
    	.then(dropped_object => {
        if(!dropped_object.length){
          next()
        } res.json({ dropped_object: dropped_object[0] });
    });
});



module.exports = router
