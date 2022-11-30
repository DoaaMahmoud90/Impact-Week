const express = require('express');
const router = express.Router();
const apps = require('../controller/appFunctions');
const auth = require('../middleware/authentication');
router.get('/', apps.homepage);
router.get('/auth', apps.showAuthenPage);
router.get('/addQuestion', auth.checkToken,apps.createQuestion)
router.post('/signUp', apps.signUp);
router.post('/logIn', apps.logIn);
module.exports = router;