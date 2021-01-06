const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user01:user01@cluster07.smeul.mongodb.net/Library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    email:String,
    password:String
});

var Signupdata = mongoose.model('signupdata',SignupSchema);


module.exports = Signupdata;
