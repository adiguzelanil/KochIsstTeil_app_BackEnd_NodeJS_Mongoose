var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a Schema and a Model

var BookSchema = new Schema({
    title: String,
    pages: Number
});

var AuthorSchema = new Schema({
    name: String,
    books: [BookSchema]
});

var Author = mongoose.model('author', AuthorSchema);

module.exports = Author;
