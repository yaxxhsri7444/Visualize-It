import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import userRoute from "./Routes/userRoute.js";
import imageRoute from "./Routes/imageRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
await connectDB();

app.use('/auth', userRoute);
app.use('/img', imageRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDhkZmU1MWRjN2JlMjYxNTFkMGY2ZiIsImlhdCI6MTc1OTA0MzU1N30.0BdTjF0aWuWW_tDhc6oc64F2txyAUQGKyHYyBkPFFy4