const Book = require("../models/book");

module.exports = function(app) {

    // Get home route
    app.get('/', (req, res) => {
        res.render('main-index');
    });

    // Boooks index route - show all books
    app.get('/books/all', (req, res) => {

        Book.find()
            .then(books => {
                res.render('books-index', { books });
            })
            .catch(err => {
                console.log(err);
            });
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
                return res.redirect('/books/all');
            })
        .catch((err) => {
            console.log(err.message);
        });
    });

}