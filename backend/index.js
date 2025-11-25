import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from './router/router'

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router)

async function start() {
    try {
      app.listen(PORT, () => {console.log(`Server start on ${process.env.PORT}`)})  
    } catch (error) {
        console.log(error);
    }
}

start()