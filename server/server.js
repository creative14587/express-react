import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import dotenv from 'dotenv';
import router from './routes/routes.js';
import cors from 'cors';

const app = express();
dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS);

app.use(express.json());

app.use(bodyparser.json());

app.use(cors());

app.use('/app', router);

app.listen(5000, () => console.log(`Server running on port http//localhost:${5000}`));