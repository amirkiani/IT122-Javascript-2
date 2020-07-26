const Book = require("./models/books")

//book.find({}, (err, result) => {
//    if (err) {
 //       console.log(err);
 //   } else {
 //       console.log(result);
   // }
  //  return
//});

Book.find({}).lean()
  .then((books) => {
    console.log(books);
  })
  .catch(err => next(err));