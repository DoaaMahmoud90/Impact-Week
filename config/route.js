const express = require('express');
const router = express.Router();
const apps = require('../controller/appFunctions');
const control = require('../controller/control')
const auth = require('../middleware/authentication');

router.get('*', auth.checkUser);
router.get('/', apps.homepage);
router.get('/auth', apps.showAuthenPage);
router.get('/logOut', apps.loggingOut);
router.post('/signUp', apps.signUp);
router.post('/logIn', apps.logIn);
router.get('/addQuestion', auth.checkToken, control.addQuestion)
router.post('/postQuestion', control.postQuestion)
router.all('/question/:id', control.viewQuestion)
router.all('/question/edit/:id', control.editQuestion)
module.exports = router;