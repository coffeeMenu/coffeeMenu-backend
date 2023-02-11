migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kwylgez9vxeam1n")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rwbasfzf",
    "name": "description",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vomhfrgt",
    "name": "client",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kwylgez9vxeam1n")

  // remove
  collection.schema.removeField("rwbasfzf")

  // remove
  collection.schema.removeField("vomhfrgt")

  return dao.saveCollection(collection)
})
