migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r2441aew5bpavx5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kywej0oe",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 2,
      "max": 64,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r2441aew5bpavx5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kywej0oe",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 2,
      "max": 32,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
