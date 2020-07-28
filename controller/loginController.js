const express = require('express');
const router = express.Router();

const users = require('../data');


router.get('/', (req, res) => {
  res.render('login/index');
});

router.post('/', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Check empty or not
  if (!username || !password) {
    return res.send('All Fields are required!');
  }
  // Check validity
  users.forEach((user) => {
    // Check username
    if (user.username === username) {
      // Check password
      if (user.password === password) {
        // Check user type
        if (user.isAdmin) return res.redirect('/admin');
        res.redirect('/employee');
      } else {
        res.send('Invalid password');
      }
    } else {
      res.send('user not found');
    }
  });
});

module.exports = router;