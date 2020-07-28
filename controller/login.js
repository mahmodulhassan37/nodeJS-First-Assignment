const express = require('express');
const router = express.Router();
const users = require('../data');


router.get('/', (req, res) => {
  res.render('login/index');
});

router.post('/', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  
  if (!username || !password) {
    return res.send('All Fields are required!');
  }
  
  users.forEach((user) => {
    
    if (user.username === username) {
      
      if (user.password === password) {
        
        if (user.isAdmin) return res.redirect('/admin');   // Check user type
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