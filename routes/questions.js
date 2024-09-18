const express = require('express');
const router = express.Router();

// Import models
const MCQ = require('../models/MCQ');
const ShortAnswer = require('../models/shortAnswer');
const Match = require('../models/Match');
const ProgrammingQuestion = require('../models/ProgrammingQuestion');

// Route to handle MCQ submissions
router.post('/mcq', async (req, res) => {
    const { question, option1, option2, option3, option4, correctAnswer } = req.body;
    try {
        const newMCQ = new MCQ({
            question,
            options: { option1, option2, option3, option4 },
            correctAnswer
        });
        await newMCQ.save();
        res.status(200).json({ message: 'MCQ added successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error saving MCQ', error: err });
    }
});

// Route to handle Short Answer submissions
router.post('/short-answer', async (req, res) => {
    const { question, answer } = req.body;
    try {
        const newShortAnswer = new ShortAnswer({ question, answer });
        await newShortAnswer.save();
        res.status(200).json({ message: 'Short answer added successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error saving short answer', error: err });
    }
});

// Route to handle Match the Following submissions
router.post('/match', async (req, res) => {
    const { question, option1, option2, option3, option4, correctMatch } = req.body;
    try {
        const newMatch = new Match({
            question,
            options: { option1, option2, option3, option4 },
            correctMatch
        });
        await newMatch.save();
        res.status(200).json({ message: 'Match the following added successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error saving match the following', error: err });
    }
});

// Route to handle Programming Question submissions
router.post('/programming-question', async (req, res) => {
    const { question, language, expectedAnswer } = req.body;
    try {
        const newProgrammingQuestion = new ProgrammingQuestion({ question, language, expectedAnswer });
        await newProgrammingQuestion.save();
        res.status(200).json({ message: 'Programming question added successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error saving programming question', error: err });
    }
});

module.exports = router;
