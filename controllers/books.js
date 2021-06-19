module.exports = function(app) {

    // get home route
    app.get('/', (req,res) => {
        res.render('main-index');
    });

    app.get('/books', (req, res) => {
        res.render('books-index');
    })

    app.get('/books/:category', (req, res) => {
        res.render('books-index');
    })

}