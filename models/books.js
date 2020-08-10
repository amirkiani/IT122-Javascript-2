const mongoose = require('mongoose');
const credentials = require("./credentials");

mongoose.connect(credentials.connectionString, { dbName: "sccprojects", useNewUrlParser: true });

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

mongoose.set('useFindAndModify', false);

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

const mySchema = mongoose.Schema({
 title: { type: String, required: true },
 author: String,
 year: Number,
 count: Number,

}); 

module.exports = mongoose.model('Book', mySchema);