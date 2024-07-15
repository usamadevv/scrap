// routes.js

const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// Define routes
router.post('/login', userController.getUserById);
router.post('/login2', userController.login2);
router.post('/createuser', userController.createUser);

router.post('/deleteusers', userController.deleteById);
router.get('/getall', userController.getAllUsers);

router.post('/updateleads', userController.updateLeads);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
