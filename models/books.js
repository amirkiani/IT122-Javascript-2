const mongoose = require('mongoose');
const credentials = require("./credentials");


const connectionString = "mongodb+srv://dbuser:Asshole1234@cluster0.nftv6.mongodb.net/sccprojects?retryWrites=true&w=majority";

console.log(credentials.connectionString);
mongoose.connect(connectionString, { dbName: "sccprojects", useNewUrlParser: true }); 

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