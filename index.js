const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files (e.g., HTML) from the "public" directory
app.use(express.static('public'));

// POST endpoint to handle messages
app.post('/api/message', (req, res) => {
    const { message } = req.body;
    if (message) {
        res.json({ reply: `You said: "${message}"` });
    } else {
        res.status(400).json({ reply: 'Please provide a message.' });
    }
});

// Start the Express server
app.listen(port, hostname, () => {
    console.log(`Server running at http://localhost:3000/`);
});
