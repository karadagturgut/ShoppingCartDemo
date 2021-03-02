const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true }
});

var Products = mongoose.model('Products', schema);

module.exports = Products;