const express = require('express');
const Code = require('../models/code-editor');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const executeCode = (language, code) => {
    return new Promise((resolve, reject) => {
        const tempFileName = `temp.${language}`;
        const filePath = path.join(__dirname, tempFileName);
        
        // Write code to a temporary file
        fs.writeFileSync(filePath, code);

        let command;
        switch (language) {
            case 'javascript':
                command = `node ${filePath}`;
                break;
            case 'python':
                command = `python ${filePath}`;
                break;
            case 'c':
                command = `gcc ${filePath} -o temp && ./temp`;
                break;
            case 'cpp':
                command = `g++ ${filePath} -o temp && ./temp`;
                break;
            default:
                reject('Unsupported language');
                return;
        }

        // Execute the command
        exec(command, (error, stdout, stderr) => {
            // Clean up temp files after execution
            fs.unlinkSync(filePath);
            if (error) {
                reject(stderr || error.message);
            } else {
                resolve(stdout);
            }
        });
    });
};

// Get all code snippets
router.get('/', async (req, res) => {
    try {
        const codes = await Code.find();
        res.json(codes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific code snippet
router.get('/:id', async (req, res) => {
    try {
        const code = await Code.findById(req.params.id);
        if (!code) return res.status(404).json({ message: 'Code not found' });
        res.json(code);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Run code snippet
router.post('/run', async (req, res) => {
    const { language, code } = req.body;
    try {
        const output = await executeCode(language, code);
        res.json({ output });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new code snippet
router.post('/', async (req, res) => {
    const { title, language, code } = req.body;
    const newCode = new Code({ title, language, code });

    try {
        const savedCode = await newCode.save();
        const output = await executeCode(language, code);
        res.status(201).json({ code: savedCode, output });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a code snippet
router.put('/:id', async (req, res) => {
    try {
        const updatedCode = await Code.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedCode);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a code snippet
router.delete('/:id', async (req, res) => {
    try {
        await Code.findByIdAndDelete(req.params.id);
        res.json({ message: 'Code deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
