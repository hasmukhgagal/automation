const axios = require('axios');

// URL of the website you want to visit
const url = 'https://gilool.in/';

// Function to visit the website
const visitWebsite = async () => {
    try {
        const response = await axios.get(url);
        console.log(`Visited ${url} - Status: ${response.status}`);
    } catch (error) {
        console.error(`Error visiting ${url}:`, error.message);
    }
};

// Visit the website immediately when the script runs
visitWebsite();
