const mongoose = require('mongoose');

const programmingQuestionSchema = new mongoose.Schema({
    question: { type: String, required: true }
});

module.exports = mongoose.model('ProgrammingQuestion', programmingQuestionSchema);
