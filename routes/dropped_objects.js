const express = require("express");
const router = express.Router();
const knex = require("../db/connection");

function getDroppedObjects(){
  return knex('dropped_object')
  .select(
		'dropped_object.id',
		'dropped_object.latitude',
		'dropped_object.longitude',
	)
}

function droppedObjectInfoJoin(droppedObject){
	return knex('object')
		.select(
			'object.id as object_id',
			'object.object_name',
      'object.category'
		)
		.innerJoin('dropped_object', 'object.id', 'dropped_object.object_id')
		.whereIn('dropped_object.id', [droppedObject.id])
}

router.get('/', (req, res) => {
	function getObjectInfoForDropped(){
		return getDroppedObjects()
			.then(function(objects){
				return Promise.all(objects.map(async (object)=> {
						object.object_info = await droppedObjectInfoJoin(object)
						return object
					})
				)
			}).then(objects => res.json({ objects }))
	}
	getObjectInfoForDropped()
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
	knex('dropped_object')
    .where('id', id)
    .then(dropped_object => {
      if(!dropped_object.length){
        return next()
      }
			res.json({ dropped_object: dropped_object[0] })
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
          return next()
        }
				res.json({ dropped_object: dropped_object[0] });
    });
});

module.exports = router
