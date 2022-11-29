const mongoose = require('mongoose');
// const AddRoute = require('../routes/filename')

const Schema = mongoose.Schema;
const AddSchema = new Schema({
    title: String,
    description: String,
    image: String
})
const Add = mongoose.model("Add",AddSchema);

module.exports = Add;