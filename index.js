/*  IT 122 - JavaScript 2 - 
Week 2 - Express yourself
    Authored By: Ameer Kiani
    Date: 07/11/2020
*/

// Create variables for http and data/books
// Define express app

const express = require("express");
const bodyParser = require("body-parser");
const books = require("./data");

const app = express();
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
    defaultLayout: false
}));

app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

// Location for static files
app.use(express.static(__dirname + '/public' ));

// Parser for form submissions
app.use(bodyParser.urlencoded({extended: true}));

// Create variable to get data from data.js
let showBooks = books.getAll();

app.get('/', (req, res) => {
    res.type('text/html');
    res.render('home', {books: showBooks});
});

app.get('/detail', (req, res) => {
    const booktitle = req.query.title
    res.render('detail', {title: booktitle, stats: books.getDetail(bookstitle)});
});


// Text response
app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('About page \n This is Ameer Kiani, \n I\'am pursuing my programming degree. This is my third quarter at SCC and I love it so far');
});
      

// Error message
app.use( (req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

app.listen(app.get('port'), () => {
    console.log('Express started');
});
