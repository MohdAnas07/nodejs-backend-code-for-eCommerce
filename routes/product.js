// const express = require('express');
const productController = require('../controller/product');
const router = require('express').Router();

router
    .get('/', productController.getProducts)
    .get('/:id', productController.getProduct)
    .post('/', productController.createProduct)
    .patch('/:id', productController.updateProduct)
    .delete('/:id', productController.deleteProduct)

module.exports = router;
