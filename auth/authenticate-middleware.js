const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Events = require('./authModel')
require('dotenv').config();

//may need to do some more configuring of process.env for secret, see lecture stuff for lesson 3ish sprint 3ish

module.exports = function authenticate  (req, res, next) {
  const tokenHeader = req.headers.authorization;
  if (tokenHeader) {
    jwt.verify(tokenHeader, process.env.SECRET , (err, decodedToken) => {
      if (err) {
        res.status(401).json({message: "bad auth"})
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    })
  } else {
  res.status(401).json({ message: 'You shall not pass!' });
  }
};



// module.exports = function restriction(req, res, next) {
//   const {username, password, tokenHeader}  = req.headers;

//   if(username && password && tokenHeader) {
//       Events.findBy({username})
//       .first()
//       .then(user => {
//         if(user && bcrypt.compareSync(password, user.password)) {
//           next();

//         } else {
//             res.status(400).json({message: "Invalid Credentials"});
//         }  
           
//       }) .catch(error => {
//           res.status(500).json(error)
//       });

//   } else {
//       res.status(400).json({message: "Please provide valid credentials"});
//   }

//   res.status(401).json({message: "You shall not pass!" });
// };