import express from 'express';

import { envs } from './src/config/envs.config.js';
import { dbConnect } from './src/config/db.config.js';

import pizzasRouter from './src/routers/Pizzas.routes.js';
import { errorHandler } from './src/middlewares/ErrorHandler.js';

const app = express();

dbConnect( {updateDocs: true} );

//Middlewares de CORS

//Middlewares para parsear el body a Json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middleawares de rutas
app.use('/api/v1', pizzasRouter);

//Middlewares de error
app.use(errorHandler);

app.listen(envs.port, () => {
    console.log(`Servidor corriendo en el puerto ${envs.port}`);
});