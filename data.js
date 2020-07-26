const books = [
    {title : 'Sphere', auth: 'Michael Crichton', year: 1987, pages: '385'},
    {title: 'Watchmen', auth: 'Alan Moore', year: 1987, pages: '487'},
    {title: 'The Kite Runner', auth: 'Khaled Hosseini', year: 2003, pages: '372'},
    {title: 'The Outsider', auth: 'Stephen King', year: 2018, pages: '560'},
    {title: 'Normal People', auth: 'Sally Rooney', year: 2018, pages: '266'}
];

// an exported getAll method that returns all array items
export function getAll() {
    return books;
}


export function getBook(bookSearch) {
        let foundBook = books.find(book => book.auth === bookSearch)
        return foundBook;
    }
    
    
export function addBook(newBook) {
    
        let result = this.getBook(newBook.auth);
        if (result){
            return {"added": false, "message": "Not found"}
        }
    
            books.push(newBook);
            return {"added": true};
    }
    
    
export function delBook(model) {
            let bookPostion = books.findIndex(books => books.auth === auth);
            if(bookPostion > -1) {
                books.splice(bookPostion, 1);
                return {"Book deleted": true};
            }
            return {"Deleted": false, "message": "Book removed"}
          
    }
