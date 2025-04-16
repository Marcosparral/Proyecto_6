import jwt from "jsonwebtoken";

import { Error } from "mongoose";
import { AuthError } from "../errors/TypeError.js";

import { User } from "../models/User.model.js";
import { hashPassword, comparePassword } from "../utils/hashPassword/HashPassword.js";
import { formateUserCreate } from "../utils/formateUserCreate.js";

import { envs } from "../config/envs.config.js";

const { jwtSecret, jwtExpiration } = envs.auth;


export const registerService = async ({ 
    nombre,
    apellido, 
    telefono, 
    email, 
    password, 
    isAdmin = false }) => {
    try {
        const hashedPassword = await hashPassword(password);

        const userData = formateUserCreate(
            hashedPassword,
            nombre,
            apellido,
            telefono,
            email,
            isAdmin
        )
        const user = await User.create(userData);

        return user;

    } catch (error) {
        throw new Error(
            'Error al intentar registrar el usuario', 500, error);
        
    };
};


export const loginService = async ({email, password}) => {
    try {
        const user = await User.findOne( {email} );
        const passwordMatch = await comparePassword(password, user.password);

        if (!user || !passwordMatch) {
            throw new AuthError('Credenciales invalidas', 401);
        };

        const token = jwt.sign({
           uid: user._id,
           nombre: user.nombre,
           email: user.email,
           isAdmin: user.isAdmin, 
        }, jwtSecret, {
            expiresIn: jwtExpiration
        });
        return [user, token];
        

    } catch (error) {
        throw new AuthError(
            'Error al intentar iniciar sesion', 500, error);
        
    };
};

export const getAllUsersService = async () => {
    try {
        const users = await User.find({ isActive: true });
        console.log(users);
        return users;
    } catch (error) {
        throw new Error(
            'Error al intentar obtener los usuarios', 500, error);
        
    };
};

