const mongoose = require('mongoose');

const borrowSchema = new mongoose.Schema({
    book: { type: mongoose.Schema.Types.ObjectId, ref: 'BookModel' },
    borrower: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' },
    borrowedAt: { type: Date, default: Date.now },
    returnedAt: { type: Date },
});

module.exports = mongoose.model('Borrow', borrowSchema);