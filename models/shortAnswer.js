const mongoose = require('mongoose');

const shortAnswerSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true }
});

module.exports = mongoose.model('ShortAnswer', shortAnswerSchema);
