const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    question: { type: String, required: true },
    options: {
        option1: { type: String, required: true },
        option2: { type: String, required: true },
        option3: { type: String, required: true },
        option4: { type: String, required: true },
    },
    correctMatch: { type: String, required: true }
});

module.exports = mongoose.model('Match', matchSchema);
