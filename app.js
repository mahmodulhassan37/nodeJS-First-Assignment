const express = require('express');
const boydParser = require('body-parser');
const bodyParser = require('body-parser');

// Routers
const login = require('./controller/login');
const employee = require('./controller/employee');
const admin = require('./controller/admin');


const app = express();  // App initialization


const PORT = 3000; // Config
app.set('view engine', 'ejs');


app.use(bodyParser());   // Middleware
app.use('/login', login);
app.use('/admin', admin);
app.use('/employee', employee);


app.get('/', (req, res) => {          // Initial route             
  res.send('Server is running');
});
    // Initial route
app.listen(PORT, () => {
  console.log('Server is running at ', PORT);
});