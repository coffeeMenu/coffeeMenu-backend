migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1rfo0vxteg3db8v")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tzoo7ngi",
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
  const collection = dao.findCollectionByNameOrId("1rfo0vxteg3db8v")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tzoo7ngi",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 2,
      "max": 128,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
