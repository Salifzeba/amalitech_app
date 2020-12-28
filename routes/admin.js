const express = require('express');
const router = express.Router();


const adminController = require('../controller/adminController');

// user section
router.get('/dashboard', adminController.getDashboard);
router.post('/register', adminController.postUser);
router.get('/user/:id', adminController.getSingleUser)
router.delete('/user/:id', adminController.getDeleteUser)

// food section
router.post('/addFood', adminController.addFood);

module.exports = router;