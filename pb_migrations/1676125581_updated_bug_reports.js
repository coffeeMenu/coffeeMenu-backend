migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kwylgez9vxeam1n")

  collection.createRule = "@request.auth.id = @request.data.user"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vomhfrgt",
    "name": "userAgent",
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

  collection.createRule = null

  // update
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
})
