const express = require('express');
const router = express.Router();

// Get all products
router.get('/products', );

// Get product by ID
router.get('/products/:id', );

// Search product by keyword
router.get('/products/search/:keyword', );

// Create product
router.post('/products', );

// Update product
router.put('/products/:id', );

// Soft delete product
router.delete('/products/:id', );

// Restore product
router.put('/products/restore/:id', );

module.exports = router;