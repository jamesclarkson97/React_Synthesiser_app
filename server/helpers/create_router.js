const express = require("express");
const errorHandler = require("./error_handler");
const ObjectID = require('mongodb').ObjectID;

const createRouter = collection => {
  const router = express.Router();

  // INDEX
  router.get("/", (req, res) => {
    collection
      .find()
      .toArray()
      .then(docs => res.json(docs))
      .catch(err => errorHandler(res, err));
  });
  // POST
  router.post('/', (req, res) => {
    const data = req.body
    collection
      .insertOne(data)
      .then(result => res.json(result.ops[0]))
      .catch(err => errorHandler(res, err));
  });
  
  // SHOW
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectID(id) })
      .then((doc) => res.json(doc))
      .catch(err => errorHandler(res, err));
  });

    // DELETE
    router.delete('/:id', (req, res) => {
      const id = req.params.id;
      collection
        .deleteOne({ _id: ObjectID(id) })
        .then(result => res.json(result))
        .catch(err => errorHandler(res, err));
    });
  
    // DELETE ALL
    router.delete('/', (req, res) => {
      collection
        .remove({})
        .then(result => res.json(result))
        .catch(err => errorHandler(res, err));
    });

  return router;
};

module.exports = createRouter;