migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6xrje0tqv2jkizz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "omebuapt",
    "name": "nice",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 0,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6xrje0tqv2jkizz")

  // remove
  collection.schema.removeField("omebuapt")

  return dao.saveCollection(collection)
})
