const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    question: { type: String, required: true },
    questions: [{ type: String, required: true }], // Array for 4 questions
    answers: [{ type: String, required: true }] // Array for 4 answers
});

module.exports = mongoose.model('Match', matchSchema);
