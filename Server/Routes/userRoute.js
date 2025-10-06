import express from 'express';
import {userRegister, userLogin, userCredit, paymentRazorpay } from '../Controller/user.controller.js';
import userauth from '../Middleware/auth.js';

const userRoute = express.Router();

userRoute.post('/register', userRegister);
userRoute.post('/login', userLogin);
userRoute.get('/credits', userauth, userCredit);
userRoute.post('/pay', userauth, paymentRazorpay);

export default userRoute;