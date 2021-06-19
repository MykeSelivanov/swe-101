module.exports = function(app) {

    // get home route
    app.get('/', (req,res) => {
        res.render('books-index');
    });

}