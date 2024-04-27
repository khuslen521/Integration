// Import required modules
const express = require('express');
const fetch = require('node-fetch');
const path = require('path'); // Import the path module

// Create an instance of Express app
const app = express();

// Define the port number
const PORT = process.env.PORT || 3000;

// Define a route to serve the statistics.html file
app.get('/statistics', (req, res) => {
    res.sendFile(path.join(__dirname, 'Integration', 'statistics.html'));
});

// Define a route to handle API requests
app.get('/api/data', async (req, res) => {
    try {
        const response = await fetch('API_ENDPOINT_URL');
        const data = await response.json();
        // Process data and send it to the client
        res.send(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
