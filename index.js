/*  IT 122 - JavaScript 2 - 
Week 1 - Node.js up and running
    Authored By: Ameer Kiani
    Date: 07/05/2020
*/

// Create variables for http and data/books
const http = require("http");
const books = require("./data");

// Create variable to get data from data.js
let showBooks = books.getAll();

// Create web server
http.createServer(function (req, res) {
    const path = req.url.toLowerCase();
    switch(path) {

//Create switch
    case '/':
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Home page \n'+ 'Array length: '+ showBooks.length);
        break;

// Display basic text info response
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('About page \n This is Ameer Kiani, \n I\'am pursuing my programming degree. This is my third quarter at SCC and I love it so far');
            break;

// Error message
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Error - Page Not found');
            break;
    }

// Listen to default port
}).listen(process.env.PORT || 3000);