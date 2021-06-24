const { realpathSync } = require("fs");
const Book = require("../models/book");

module.exports = function(app) {

    // Get home route
    app.get('/', (req, res) => {
        res.render('main-index');
    });

    // Boooks index route - show all books
    app.get('/books', (req, res) => {
        // query parameter vs params
        const param = req.query.category;
        console.log(param);
        if(param  === undefined) {
            Book.find()
            .then(books => {
                res.render('books-index', { books });
            })
            .catch(err => {
                console.log(err);
            });
        } else {
            Book.find({ category: param})
            .then(books => {
                console.log(books)
                res.render('books-index', { books });
            })
            .catch(err => {
                console.log(err);
            });
        }
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