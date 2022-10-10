import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
import colors from 'colors';
import cors from 'cors';
import data from './data.js';


const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use(cors())



app.get('/api/products', (req, res) => {
    res.send(data.products)
})

app.listen(PORT, () => {
    console.log(`server is listening at http://localhost:${PORT}`.yellow)
})