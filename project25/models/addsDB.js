const mongoose = require('mongoose');
// const AddRoute = require('../routes/filename')

const Schema = mongoose.Schema;
// // установка схемы
const UsersSchema = new Schema({
    name: String,
    email: String,
    password: String
})
// // установка схемы
const AddSchema = new Schema({
    title: String,
    description: String,
    image: String,
    ontop:String,
    onTopDate:String,
    liked:String,
    userId:String
})
// const LikedSchema = new Schema({
//     title: String,
//     description: String,
//     image: String
// })
const users = mongoose.model("users",UsersSchema);
const Adds = mongoose.model("adds",AddSchema);
module.exports = users;
module.exports = Adds;
// module.exports = Liked;

// 
// 
// 
// const mongoose = require("mongoose");
 
// const Schema = mongoose.Schema;

// // установка схемы
// const userScheme = new Schema({
//     name: String,
//     age: Number
// });

// module.exports = mongoose.model("User", userScheme);