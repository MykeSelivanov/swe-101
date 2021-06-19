const express = require('express');
const app = express();
const Handlebars = require('handlebars');
const mongoose = require('mongoose');
require('dotenv').config();

const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

// middleware
var exphbs = require('express-handlebars');

// static files
app.use(express.static('public'));

// set the templating engine -> handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main',
handlebars: allowInsecurePrototypeAccess(Handlebars)}));
app.set('view engine', 'handlebars');

require('./controllers/books.js')(app);

// define app route
app.listen(process.env.PORT || 3000, () => {
    console.log(`App listening on port ${process.env.PORT}!`);
});

module.exports = app;