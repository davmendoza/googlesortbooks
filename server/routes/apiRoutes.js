const router = require("express").Router();
const db = require("../models");

router.get("/api/book", (req, res) => {
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  db.Book.find({
    title: { $regex: new RegExp(req.query.q, 'i')}
  })
    .then(recipes => res.json(recipes))
    .catch(err => res.status(422).end());
});
router.post("/api/book", (req , res) => {
  // itemsCollection.insertOne(newItem)
  // .then(result => console.log(`Successfully inserted item with _id: ${result.insertedId}`))
  // .catch(err => console.error(`Failed to insert item: ${err}`))
  db.Book.insertOne(newBook) 
  .then(result => console.log (`Successfully inserted item with _id: ${result.insertedId}`) )
  .catch(err => console.error(`Failed to insert item: ${err}`))
} )

module.exports = router;