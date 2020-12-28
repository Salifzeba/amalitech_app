const express = require('express');
const router = express.Router();


const frontController = require('../controller/frontController');

router.get('/',frontController.getIndex);

router.get('/login', frontController.getLogin)
   
router.get('/register', frontController.getRegister)

router.post('/register', frontController.postUser);

module.exports = router;