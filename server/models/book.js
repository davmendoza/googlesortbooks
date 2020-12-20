const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  // url string for thumbnail image
  publishedYear: {
    type: Date,
    required: true
  },
  imageUrl: {
    type: String
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;