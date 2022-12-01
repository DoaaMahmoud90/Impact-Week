const express = require('express');
const router = express.Router();
const apps = require('../controller/appFunctions');
const control = require('../controller/control')
const auth = require('../middleware/authentication');


router.get('/', apps.homepage);
router.get('/auth', apps.showAuthenPage);
router.get('/logOut', apps.loggingOut);
router.post('/signUp', apps.signUp);
router.post('/logIn', apps.logIn);
router.get('/addQuestion', control.addQuestion)
router.post('/postQuestion', control.postQuestion)

module.exports = router;