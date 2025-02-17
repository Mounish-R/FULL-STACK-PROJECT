const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors middleware
const questionRoutes = require('./routes/questions'); // Import question routes
const CodeEditor = require('./routes/code-editor')

const app = express();

// Use CORS middleware
app.use(cors()); // Allows all origins by default

app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Questions', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Use question routes
app.use('/api/questions', questionRoutes);
app.use('/api/codes',CodeEditor)

// Example route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start the server
const PORT =  3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post('/api/login', (req, res) => {
    // Handle POST request here
    console.log(req.body); // Print the POST request body to console
    res.redirect('http://localhost:4200/dashboard/')
});
  
