migrate((db) => {
  const collection = new Collection({
    "id": "kwylgez9vxeam1n",
    "created": "2023-02-08 16:13:37.204Z",
    "updated": "2023-02-08 16:13:37.204Z",
    "name": "bug_reports",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mth7h00j",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "x55km608",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
        }
      },
      {
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
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": "",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kwylgez9vxeam1n");

  return dao.deleteCollection(collection);
})
