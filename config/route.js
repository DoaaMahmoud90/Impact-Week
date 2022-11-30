const express = require('express');
const router = express.Router();
const apps = require('../controller/appFunctions');
const control = require('../controller/control')
const auth = require('../middleware/authentication');


router.get('/',auth.checkStatus, apps.homepage);
router.get('/auth', apps.showAuthenPage);
router.get('/addQuestion', auth.checkToken,apps.createQuestion);
router.get('/logOut', apps.loggingOut);
router.post('/signUp', apps.signUp);
router.post('/logIn', apps.logIn);
router.all('/addQuestion', control.postQuestion)
module.exports = router;