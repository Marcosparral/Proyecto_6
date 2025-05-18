import dotenv from 'dotenv';

dotenv.config();

export const envs = {
    port: process.env.PORT ||3000,
    UrlFrontend: process.env.URL_FRONTEND, 
    db: {
        uri: process.env.MONGO_URI
    }, 
    auth: {
        saltRounds: process.env.SALT_ROUNDS || 10,
        jwtSecret: process.env.JWT_SECRET,
        jwtExpiration: process.env.JWT_EXPIRATION || '10h'
    },
    mercadopagoToken: process.env.MERCADOPAGO_ACCESS_TOKEN
};