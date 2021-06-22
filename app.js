const express = require('express');
const app = express();
const Handlebars = require('handlebars');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
// const checkAuth = require('./middleware/checkAuth');

// environment variables
require('dotenv').config();

// body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }), methodOverride('_method'));

const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

// middleware
var exphbs = require('express-handlebars');
// middleware for parsing cookies
app.use(cookieParser());

// user authentication
// app.use(checkAuth); 

// static files
app.use(express.static('public'));

// set the templating engine -> handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main',
handlebars: allowInsecurePrototypeAccess(Handlebars)}));
app.set('view engine', 'handlebars');

// mongodb connection
const connectionString = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.hyums.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error:"));

// controllers
require('./controllers/books.js')(app);

// define app route
app.listen(process.env.PORT || 3000, () => {
    console.log(`App listening on port ${process.env.PORT}!`);
});

module.exports = app;