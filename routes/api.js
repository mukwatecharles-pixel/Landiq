const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = function(pool) {
  const router = express.Router();

  // Login Endpoint
  router.post('/auth/login', async (req, res) => {
    const { email, password } = req.body;

    try {
      // 1. Query user from PostgreSQL database
      const userQuery = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      
      if (userQuery.rows.length === 0) {
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }

      const user = userQuery.rows.logins || userQuery.rows[0];

      // 2. Compare password hash
      const isMatch = await bcrypt.compare(password, user.password_hash);
      if (!isMatch) {
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }

      // 3. Generate JWT Token
      const token = jwt.sign(
        { userId: user.id, email: user.email }, 
        process.env.JWT_SECRET || 'fallback_secret', 
        { expiresIn: '7d' }
      );

      // 4. Send successful JSON response
      return res.status(200).json({
        success: true,
        token,
        user: { id: user.id, email: user.email, name: user.name }
      });

    } catch (err) {
      console.error('Login error:', err);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });

  return router;
};