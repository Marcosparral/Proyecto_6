import express from 'express';
import cors from 'cors';

import { envs } from './src/config/envs.config.js';
import { dbConnect } from './src/config/db.config.js';


import apiRouter from './src/routers/index.router.js';
import { errorHandler } from './src/middlewares/ErrorHandler.js';


const app = express();

dbConnect( {updateDocs: true} );

//Middlewares de CORS
app.use(cors());

//Middlewares para parsear el body a Json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middlewares de rutas estaticas
app.use('/uploads', express.static('public/uploads'));

//Middleawares de rutas
app.use('/api/v1', apiRouter);

//Middleawares de errores 
app.use(errorHandler);

app.listen(envs.port, () => {
    console.log(`Servidor corriendo en el puerto ${envs.port}`);
});