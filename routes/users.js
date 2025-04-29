const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const { catchAsync, storeReturnTo } = require('../utils/middleware');
const users = require('../controllers/users');

router.route('/register')
    .get(users.renderRegisterForm)
    .post(catchAsync(users.regsiterUser));

router.route('/login')
    .get(users.renderLoginForm)
    .post(storeReturnTo, passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.Login);

router.get('/logout', users.Logout);

module.exports = router;