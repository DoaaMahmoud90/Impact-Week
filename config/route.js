const express = require('express');
const router = express.Router();
const apps = require('../controller/appFunctions');
router.get('/', apps.homepage);
router.get('/auth', apps.authentication);
router.post('/signUp', apps.registration);
router.post('/logIn', apps.logIn);
module.exports = router;