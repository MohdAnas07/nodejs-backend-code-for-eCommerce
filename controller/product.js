// const data = require('../data.json')
// const { products, users } = data;
// console.log(products);
// const mongoose = require('mongoose')


const model = require('../model/product');
const Product = model.Product;



// Get all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        if (products) {
            res.status(200).json(products)
        } else {
            res.status(400).json('no user found')
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

// GET Single Product
exports.getProduct = async (req, res) => {
    const id = req.params.id
    try {
        const product = await Product.findById(id);
        if (product) {
            res.status(200).json(product)
        } else {
            res.status(400).json('No user Found')
        }
    } catch (error) {
        res.status(400).json(error)
    }
}


// Create a Product
exports.createProduct = async (req, res) => {
    const newProduct = new Product(req.body)
    try {
        const savedProducts = await newProduct.save()
        res.status(200).json(savedProducts);
    } catch (error) {
        res.status(400).json(error)
    }
}

// Update a Product
exports.updateProduct = async (req, res) => {
    const id = req.params.id
    try {
        const doc = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true });
        res.status(200).json(doc);
    } catch (error) {
        res.status(400).json(error)
    }
}

// Delete a Product
exports.deleteProduct = async (req, res) => {
    const id = req.params.id
    try {
        const doc = await Product.findOneAndDelete({ _id: id });
        res.status(200).json(doc);
    } catch (error) {
        res.status(400).json(error)
    }
}   
