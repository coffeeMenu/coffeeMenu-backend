migrate((db) => {
  const snapshot = [
    {
      "id": "_pb_users_auth_",
      "created": "2022-12-01 11:48:24.401Z",
      "updated": "2022-12-25 09:24:35.123Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "users_name",
          "name": "name",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "users_avatar",
          "name": "avatar",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/jpg",
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif"
            ],
            "thumbs": null
          }
        }
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": "",
      "updateRule": "id = @request.auth.id",
      "deleteRule": "id = @request.auth.id",
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": false,
        "allowUsernameAuth": true,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 8,
        "onlyEmailDomains": null,
        "requireEmail": true
      }
    },
    {
      "id": "1rfo0vxteg3db8v",
      "created": "2022-12-01 13:20:38.730Z",
      "updated": "2022-12-05 13:23:15.527Z",
      "name": "stores",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "jbklonzq",
          "name": "owner",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": true
          }
        },
        {
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
        },
        {
          "system": false,
          "id": "yyrht1l1",
          "name": "username",
          "type": "text",
          "required": true,
          "unique": true,
          "options": {
            "min": 2,
            "max": 32,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "bhmexjia",
          "name": "address",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "yjpdi1le",
          "name": "description",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "ifxdoppr",
          "name": "profile",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 1000000,
            "mimeTypes": [
              "image/jpg",
              "image/jpeg",
              "image/png"
            ],
            "thumbs": [
              "200x200"
            ]
          }
        },
        {
          "system": false,
          "id": "s7d0aeta",
          "name": "photos",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 10,
            "maxSize": 2000000,
            "mimeTypes": [
              "image/jpg",
              "image/jpeg",
              "image/png"
            ],
            "thumbs": [
              "480x720"
            ]
          }
        },
        {
          "system": false,
          "id": "hmsezt4v",
          "name": "orderby_product",
          "type": "select",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "dragdrop",
              "name",
              "price",
              "date"
            ]
          }
        },
        {
          "system": false,
          "id": "hdlo03oo",
          "name": "orderby_category",
          "type": "select",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "dragdrop",
              "date",
              "name"
            ]
          }
        }
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": "@request.auth.id = @request.data.owner",
      "updateRule": "@request.auth.id = owner && @request.data.owner = owner",
      "deleteRule": "@request.auth.id = owner",
      "options": {}
    },
    {
      "id": "3tlm5jngy3qofq2",
      "created": "2022-12-01 13:21:23.136Z",
      "updated": "2022-12-01 13:27:40.453Z",
      "name": "stores_translation",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "9wt6pjkq",
          "name": "store",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "collectionId": "1rfo0vxteg3db8v",
            "cascadeDelete": true
          }
        },
        {
          "system": false,
          "id": "0gb6bibz",
          "name": "region",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        }
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "r2441aew5bpavx5",
      "created": "2022-12-01 13:23:48.776Z",
      "updated": "2022-12-13 09:49:07.157Z",
      "name": "products",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "yactv34q",
          "name": "store",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "collectionId": "1rfo0vxteg3db8v",
            "cascadeDelete": true
          }
        },
        {
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
        },
        {
          "system": false,
          "id": "jrvszhb4",
          "name": "description",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "rrvrkwff",
          "name": "category",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "collectionId": "6xrje0tqv2jkizz",
            "cascadeDelete": false
          }
        },
        {
          "system": false,
          "id": "qgji3df8",
          "name": "price",
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
          "id": "jru0x6u8",
          "name": "pictures",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 5,
            "maxSize": 2000000,
            "mimeTypes": [
              "image/jpg",
              "image/jpeg",
              "image/png"
            ],
            "thumbs": [
              "480x720"
            ]
          }
        },
        {
          "system": false,
          "id": "ym8shtu1",
          "name": "discount",
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
          "id": "11hjdxmh",
          "name": "order",
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
          "id": "myfewsyd",
          "name": "available",
          "type": "bool",
          "required": false,
          "unique": false,
          "options": {}
        }
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": "@request.auth.id = store.owner",
      "updateRule": "@request.auth.id = store.owner && @request.data.store = store",
      "deleteRule": "@request.auth.id = store.owner",
      "options": {}
    },
    {
      "id": "6xrje0tqv2jkizz",
      "created": "2022-12-01 13:24:44.475Z",
      "updated": "2022-12-12 13:18:55.040Z",
      "name": "products_category",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "hvtlzb0c",
          "name": "name",
          "type": "text",
          "required": true,
          "unique": true,
          "options": {
            "min": 2,
            "max": 32,
            "pattern": ""
          }
        }
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "amb8uo2itmcjg16",
      "created": "2022-12-01 13:27:24.113Z",
      "updated": "2022-12-01 13:27:24.113Z",
      "name": "products_translation",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "9nfapyad",
          "name": "product",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "collectionId": "r2441aew5bpavx5",
            "cascadeDelete": true
          }
        },
        {
          "system": false,
          "id": "lbkboh04",
          "name": "region",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        }
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "x8gqoz50h4nf2wi",
      "created": "2022-12-07 12:34:28.900Z",
      "updated": "2022-12-07 20:55:16.942Z",
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
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
