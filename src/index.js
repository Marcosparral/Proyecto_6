import express from 'express';
import { envs } from './config/envs.config.js';
import { db } from './config/db.config.js';

const app = express();

db();

//Middlewares de CORS

//Middlewares para parsear el body a Json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middleawares de rutas

//Middlewares de error

app.listen(envs.port, () => {
    console.log(`Server is running on port ${envs.port}`);
})