const jwt = require('jsonwebtoken');

// Middleware to verify JWT
const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer', '');

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'Access Denied. No token provided.' });
  }

  try {
    // Verify the token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error('Token verification failed:', error);
    res.status(400).json({ message: 'Invalid token.' });
  }
};

module.exports = {authenticateUser};