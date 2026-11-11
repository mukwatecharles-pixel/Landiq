const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// Add this near your other route definitions in server.js
const apiRoutes = require('./routes/api')(pool);
app.use('/api', apiRoutes);

// We will pass the pg pool instance into a function or import it directly
module.exports = (pool) => {
  
  // 1. User Login Route
  router.post('/auth/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      
      const userQuery = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      if (userQuery.rows.length === 0) {
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }

      const user = userQuery.rows[0];
      const isMatch = await bcrypt.compare(password, user.password_hash);
      
      if (!isMatch) {
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }

      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });

      res.json({ success: true, token, user: { id: user.id, email: user.email } });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  });

  // 2. Escrow Initiation Route
  router.post('/escrow/initiate', async (req, res) => {
    try {
      const { parcelId, buyerId, amount } = req.body;

      const escrowQuery = await pool.query(
        `INSERT INTO escrow_transactions (parcel_id, buyer_id, amount, status) 
         VALUES ($1, $2, $3, 'pending_verification') RETURNING *`,
        [parcelId, buyerId, amount]
      );

      res.json({ 
        success: true, 
        message: 'Escrow initialized successfully. Awaiting NLC verification.', 
        escrow: escrowQuery.rows[0] 
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Failed to initialize escrow' });
    }
  });

  return router;
};