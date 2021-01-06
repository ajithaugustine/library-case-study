const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user01:user01@cluster07.smeul.mongodb.net/Library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    title:String,
    year:String,
    genre:String,
    image:String
});

var Authordata = mongoose.model('authordata',AuthorSchema);


module.exports = Authordata;
