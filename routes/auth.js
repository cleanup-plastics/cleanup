const router = require("express").Router();
const User = require('../models/User.model');
const bcrypt = require('bcrypt');
const passport = require('passport');


router.post('/signup', (req, res, next) => {
  const { username, email, password } = req.body;
  if (password.length < 8) {
    return res.status(400).json({ message: 'Your password must be longer than 8 characters' });
  }
  if (email === "") {
    return res.status(400).json({ message: 'Email field cannot be empty' });
  }
  if (username === '') {
    return res.status(400).json({ message: 'Username field cannot be empty' });
  }
  // check if username exists in database 
  User.findOne({ username: username })
    .then(user => {
      if (user !== null) {
        return res.status(400).json({ message: 'This username is already taken' });
      } else {
        // hash the password, create the user and send the user to the client
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt);

        User.create({
          username: username,
          email: email, 
          password: hash
        })
          .then(dbUser => {
            // login with passport:
            req.login(dbUser, err => {
              if (err) {
                return res.status(500).json({ message: 'Error while attempting to login' })
              }
              // we don't redirect to an html page anymore, we just send the user obj to the client
              return res.status(200).json(dbUser);
            });
          })
          .catch(err => {
            res.json(err);
          })
      }
    })
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Error while attempting to login' })
    }
    if (!user) {
      return res.status(400).json({ message: 'Wrong credentials' })
    }
    req.login(user, err => {
      if (err) {
        return res.status(500).json({ message: 'Error while attempting to login' })
      }
      return res.status(200).json(user);
    })
  })
});

router.delete('/logout', (req, res) => {
  // passport method to log out
  req.logout();
  res.status(200).json({ message: 'Successfully logged out' });
})

router.get('/loggedin', (req, res, next) => {
  // this is where passport stores the logged in user
  res.json(req.user);
});

module.exports = router;