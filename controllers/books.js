const Book = require("../models/book");

module.exports = function(app) {

    // Get home route
    app.get('/', (req, res) => {
        res.render('main-index');
    });

    // Boooks index route
    app.get('/books', (req, res) => {
        res.render('books-index');
    });

    app.get('/books/new', (req, res) => {
        res.render('books-new');
    });

    // Create new book
    app.post('/books/new', (req, res) => {
        console.log(req.body);
        const book = new Book(req.body);
        book
            .save()
            .then(() => {
                return res.redirect('/books');
            })
        .catch((err) => {
            console.log(err.message);
        });
    });

}