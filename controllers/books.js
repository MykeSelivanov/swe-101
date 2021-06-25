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
    
        if(param  === 'all' || param === undefined) {
            Book.find()
            .then(books => {
                res.render('books-index', { books });
            })
            .catch(err => {
                console.log(err);
            });
        } else {
            Book.find({ category: param })
            .then(books => {
                res.render('books-index', { books });
            })
            .catch(err => {
                console.log(err);
            });
        }
    });

    // Form for addin a new book
    app.get('/books/new', (req, res) => {
        res.render('books-new');
    });

    // Getting single book
    app.get('/books/:id', (req, res) => {
        Book.findById(req.params.id).lean()
        .then(book => {
            res.render('books-show', { book });
        })
        .catch(err => {
            console.log(err);
        });
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