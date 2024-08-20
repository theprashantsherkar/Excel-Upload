
import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import dotenv from "dotenv";
import adminRouter from './routes/admin.js';
import bodyParser from "body-parser";
import path from 'path';
import { fileURLToPath } from "url";


export const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(cors({
    origin: "http://localhost:5173",//add frontend url from config file
    credentials: true
}))
dotenv.config({
    path: './database/config.env'
})
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')))


app.use('/admin', adminRouter)

