import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

import router from './router.js';

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const app = express();

app.use(express.json());
app.use('/api', router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => {
            console.log('SERVER STARTED ON PORT ' + PORT);
        });
    } catch (exception) {
        console.error(exception);
    }
}

startApp();
