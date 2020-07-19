// Required modules
const expect = require("chai").expect;
const books = require("../data");


describe("test modules", () => {

//Test for adding items

it('adds book successfully', ()=> {
        const addBook = books.addBook({title : 'Shantaram', auth: 'Gregory David Roberts', year: 2003, pages: '936' });
        console.log(addBook)
        expect(addBook.added).to.be.true;
    });

it('does not add book successfully', ()=> {
        const addBook = books.addBook({title : 'The President Is Missing'});
        console.log(addBook)
        expect(addBook.added).to.be.false;
    });



// Test for getBooks method
    it('successly return a book', ()=> {
        const testGetBook = books.getBook("Sphere");

        expect(testGetBook).to.deep.equal({title : 'Sphere', auth: 'Michael Crichton', year: 1987, pages: '385' });
    });

    it('unsuccesfully return a book', ()=> {
        const testGetBook = books.getBook("Steve Jobs");

        expect(testGetBook).to.be.undefined;
    });



// Test for deleteing book
    it('will delete a book', () => {
        const result = book.delBook("Normal People");
        console.log(result);
        expect(result.deleted).to.be.true;
    });

    it('fails to delete a book not in the array', () =>{
        const result = books.delBook("Steve Jobs");
        console.log(result);

        expect(result.deleted).to.be.false;
        
    });

});