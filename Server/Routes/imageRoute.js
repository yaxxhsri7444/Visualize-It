import express from 'express';
import userauth from '../Middleware/auth.js';
import { generateImage } from '../Controller/image.controller.js';


const imageRoute = express.Router();

imageRoute.post('/generate-img',userauth ,generateImage);

export default imageRoute;