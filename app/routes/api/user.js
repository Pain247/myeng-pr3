'use strict';

const express = require('express');
const router = express.Router();
const userController = require(global.__base + 'app/controllers/user/index');
const deserializeUser = require(global.__base + 'app/controllers/middleware/deserializeUser.js');
const isUser = require(global.__base + 'app/controllers/middleware/isUser.js');
const deserialize = require(global.__base + 'app/controllers/middleware/deserialize.js');
const isAuthenticated = require(global.__base + 'app/controllers/middleware/isAuthenticated.js');

var fs = require('fs');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './upload/images');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage });
router.get('/my-feedback', isUser, deserializeUser, userController.myFeedback)
router.get('/myinfo', isUser, deserializeUser, userController.info);
router.post('/getinfo', isAuthenticated, deserialize, userController.getInfo);
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/logout', isUser, deserializeUser, userController.logout);
router.get('/streak', isUser, deserializeUser, userController.getStreak);
router.post('/update', isUser, deserializeUser, userController.update);
router.post('/password', isUser, deserializeUser, userController.updatePassword);
router.post('/exp', isUser, deserializeUser, userController.updateEXP);
router.post('/level', isUser, deserializeUser, userController.updateLevel);
router.post('/train', isUser, deserializeUser, userController.newTrain);
router.post('/avt', isUser, deserializeUser, upload.single("file"), userController.avatar);
router.post('/feedback', userController.createFeedback);
router.get("/feed/:id", isAuthenticated, deserialize, userController.getFeedback);
module.exports = router;