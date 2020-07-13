/*  IT 122 - JavaScript 2 - 
Week 1 - Node.js up and running
    Authored By: Ameer Kiani
    Date: 07/05/2020
*/

// Create array of 5 objects with 4 attributes each
const books = [
    {title : 'Sphere', auth: 'Michael Crichton', year: 1987, pages: '385'},
    {title: 'Watchmen', auth: 'Alan Moore', year: 1987, pages: '487'},
    {title: 'The Kite Runner', auth: 'Khaled Hosseini', year: 2003, pages: '372'},
    {title: 'The Outsider', auth: 'Stephen King', year: 2018, pages: '560'},
    {title: 'Normal People', auth: 'Sally Rooney', year: 2018, pages: '266'}
];

// an exported getAll method that returns all array items
exports.getAll = () => {
    return books;
}

// find feature to get the title to match parameter
exports.getDetail = auth => {
    const book = books.find(books => books.auth === auth);
    return books;}
