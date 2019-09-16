
const jwt = require('jsonwebtoken');




module.exports = function restriction (req, res, next) {
  const tokenHeader = req.headers.authorization;
  if (tokenHeader) {
    jwt.verify(tokenHeader, "AliDaShizzyManizzy" , (err, decodedToken) => {
      if (err) {
        console.log(err)
        res.status(401).json({message: "bad auth"})
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    })
  } else {
  res.status(401).json({ you: 'shall not pass!' });
  }
};