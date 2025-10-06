import express from 'express';
import {userRegister, userLogin, userCredit } from '../controller/user.controller.js';
import userauth from '../Middleware/auth.js';

const userRoute = express.Router();

userRoute.post('/register', userRegister);
userRoute.post('/login', userLogin);
userRoute.get('/credits', userauth, userCredit);

export default userRoute;