import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from './router/router.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router)

async function start() {
    try {
      app.listen(process.env.PORT, () => {console.log(`Server start on ${process.env.PORT}`)})  
    } catch (error) {
        console.log(error);
    }
}

start()