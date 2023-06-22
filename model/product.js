const mongoose = require('mongoose');
const { Schema } = mongoose;


const productSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: [0, 'wrong price'] },
    discountPercentage: Number,
    rating: { type: Number, min: [0, 'wrong rating'], max: [5, 'wrong rating'] },
    stock: { type: Number },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    thumbnail: { type: String, required: true },
    images: [String]
}, { timestamps: true });


exports.Product = mongoose.model('Product', productSchema);