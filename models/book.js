const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title: String,
    authors: String,
    imageLink: String,
    description: String,
    category: String,
    level: String,
    year: Number
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;