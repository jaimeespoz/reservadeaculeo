const { Schema, model } = require('mongoose');

const BooksSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, required: true },
    create_at: { type: Date, default: Date.now },
});

BooksSchema.index({ title: 1 }, { unique: true });

module.exports = model('Books', BooksSchema);
