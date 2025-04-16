import jwt from 'jsonwebtoken';

import { envs } from '../config/envs.config.js';
import { AuthError } from "../errors/TypeError.js"

const { jwtSecret } = envs.auth;

export const authMiddleware = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const token = authorization.startsWith('Bearer ') 
        ? authorization.slice(7) : null;
        if (!token) {
            throw new AuthError(
                'No se ha proporcionado el token de autenticación',
                401
            );
        }

        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded;

        next();
    } catch (error) {
        throw new AuthError(
            'Token inválido o inesperado', 500, error
        );
    }
}