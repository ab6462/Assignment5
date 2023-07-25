const mongoose = require('mongoose');

// create schema
const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: String,
    image: String,
    manufacturer: String
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

// create model
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;