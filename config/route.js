const express = require('express');
const router = express.Router();
const apps = require('../controller/appFunctions');
const control = require('../controller/control')

router.get('/', apps.homepage);
router.get('/auth', apps.authentication);
router.post('/signUp', apps.registration);
router.post('/logIn', apps.logIn);
router.all('/addQuestion', control.postQuestion)
module.exports = router;