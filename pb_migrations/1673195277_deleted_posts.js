migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("x8gqoz50h4nf2wi");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "x8gqoz50h4nf2wi",
    "created": "2022-12-07 12:34:28.900Z",
    "updated": "2023-01-02 08:04:04.556Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lkkv1gx1",
        "name": "number",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "odgaqg4i",
        "name": "field",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
