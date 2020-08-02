'use strict'

const express = require("express");
const bodyParser = require("body-parser");

const books = require("./data");

const Book = require("./models/books");

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
//app.use(bodyParser.urlencoded({extended: true}));

// Create variable to get data from data.js
let showBooks = books.getAll();


app.get('/', (req, res, next) => {
    return Book.find({}).lean()
      .then((books) => {
          res.render('home', { books });
      })
      .catch(err => next(err));
  });

app.get('/detail', (req, res) => {
    const booktitle = req.query.title
    Book.findOne({"title": booktitle }).lean()
  .then((book) => {
      console.log(book);
      res.render('detail', {title: booktitle, stats: book});
  })
  .catch(err => next(err));
});


app.get('/delete', (req, res) => {
    const booktitle = req.query.title;
    books.findByIDAndDelete({title: booktitle}, (err, book) => {
        
        if (err) {
            console.log(err);
        } else if (!book) {
            console.log(booktitle + "Book not found");
            res.send(`${booktitle} not found`);
        } else if (movie) {
            console.log(booktitle + "Removed");
            res.send(`${booktitle} Removed`);
        }
    });
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

app.use('/api', require('cors')()); // set Access-Control-Allow-Origin header for api route

app.get('/api/books', (req, res) => {
    return Book.find({}).lean()
      .then((books) => {
          // res.json sets appropriate status code and response header
          res.json(books);
      })
      .catch(err => {return res.status(500).send('Error occurred: database error.');
  });

  res.json(books.map((a) => {
    // return only public book attributes
    return {
      title: a.title,
      author: a.author,
      description: a.description
    }
  })
);

app.listen(app.get('port'), () => {console.log('Express started');})})
