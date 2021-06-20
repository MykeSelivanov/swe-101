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
        res.render('books-form');
    });

}