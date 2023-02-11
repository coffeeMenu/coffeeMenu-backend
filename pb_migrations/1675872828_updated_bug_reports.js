migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kwylgez9vxeam1n")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vsdwczik",
    "name": "store",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "1rfo0vxteg3db8v",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kwylgez9vxeam1n")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vsdwczik",
    "name": "field1",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "1rfo0vxteg3db8v",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
