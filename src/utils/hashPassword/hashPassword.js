import bcrypt from "bcrypt";
import { AuthError } from "../../errors/TypeError.js";
import { envs } from "../../config/envs.config.js";

const { saltRounds } = envs.auth;    

export const hashPassword = async ( password ) => {
    try {
        const hashedPassword = await bcrypt.hash( password, Number(saltRounds) );
        return hashedPassword 
    } catch (error) {
        throw new AuthError(
            'Error al intentar hashear la contraseña', 500, error);
        
    };
};

export const comparePassword = async ( password, hashedPassword ) => {
    try {
       return await bcrypt.compare( password, hashedPassword ); 
    } catch (error) {
        throw new AuthError(
            'Error al intentar comparar la contraseña', 500, error);
        
    };
};
