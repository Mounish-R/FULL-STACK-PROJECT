const mongoose = require('mongoose');

const codeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  language: { type: String, required: true },
  code: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Code', codeSchema);
