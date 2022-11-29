const mongoose = require('mongoose');
const { usr } = require('../routes/blog');

const Schema = mongoose.Schema;
const userScheme = new Schema({
    name: String,
    age: Number
});
const User = mongoose.model("User", userScheme);



// const User = mongoose.model("User", userScheme);



module.exports = User
