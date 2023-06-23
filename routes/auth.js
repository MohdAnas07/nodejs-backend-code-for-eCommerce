const authController = require('../controller/auth');
const router = require('express').Router();

router
    .post('/', authController.createUser)



module.exports = router;