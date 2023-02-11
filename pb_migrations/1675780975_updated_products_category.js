migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6xrje0tqv2jkizz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "omebuapt",
    "name": "nice",
    "type": "number",
    "required": true,
    "unique": true,
    "options": {
      "min": 1,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6xrje0tqv2jkizz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "omebuapt",
    "name": "nice",
    "type": "number",
    "required": true,
    "unique": true,
    "options": {
      "min": 0,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
