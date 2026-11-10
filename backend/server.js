const express = require('express');
const cors = require('cors');
const { handleUSSD } = require('./ussd_handler');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', service: 'LandIQ Core API', version: '1.0.0' });
});

// USSD Endpoint for Africa's Talking (*384#)
app.post('/api/ussd', handleUSSD);

// Title Verification Mock API (NLC Integration point)
app.get('/api/verify-title/:titleNumber', (req, res) => {
    const { titleNumber } = req.params;
    // Simulated registry lookup
    res.json({
        title_number: titleNumber,
        status: 'VALID',
        registered_owner: 'John K. Mwangi',
        encumbrances: 'None',
        rates_due_kes: 0.00,
        is_verified: true
    });
});

app.listen(PORT, () => {
    console.log(`🚀 LandIQ Backend Server running on port ${PORT}`);
});