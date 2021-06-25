const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const commentSchema = new Schema({
    title: String,
    content: String,
    rating: Number,
    bookId: { type: Schema.Types.ObjectId, ref: 'Book'},
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;