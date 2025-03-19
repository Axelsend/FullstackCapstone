const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT || 'shhh';

function requireUser(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "You must be logged in to access this resource." });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid or expired token." });
    }

    req.user = decoded;

    next();
  })};

module.exports = {
  requireUser
}