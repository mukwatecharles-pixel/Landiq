const express = require('express');
const cors = require('cors');
const { handleUSSD } = require('./ussd_handler');
const { triggerSTKPush } = require('./mpesa');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', service: 'LandIQ Core API', version: '1.0.0' });
});

// USSD Endpoint for Africa's Talking (*384#)
app.post('/api/ussd', handleUSSD);

// M-Pesa STK Push Endpoint (Listing Fees, Reports & 10% Escrow Deposits)
app.post('/api/mpesa/stkpush', async (req, res) => {
    const { phoneNumber, amount, parcelId, paymentType } = req.body;
    try {
        const result = await triggerSTKPush(
            phoneNumber,
            amount,
            `LANDIQ-${parcelId}`,
            `LandIQ ${paymentType || 'Deposit'}`
        );
        res.json({ success: true, message: 'STK Push sent to user phone', data: result });
    } catch (error) {
        res.status(500).json({ success: false, error: 'M-Pesa STK Push failed to initiate' });
    }
});

// M-Pesa Async Callback Listener Endpoint
app.post('/api/mpesa/callback', (req, res) => {
    console.log('📌 M-Pesa Callback Received:', JSON.stringify(req.body, null, 2));
    // Here: Update transaction state in PostgreSQL escrow_transactions table
    res.json({ ResultCode: 0, ResultDesc: "Accepted" });
});

app.listen(PORT, () => {
    console.log(`🚀 LandIQ Backend Server running on port ${PORT}`);
});