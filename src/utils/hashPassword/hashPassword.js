import bcrypt from "bcrypt";
import { AuthError } from "../../errors/TypeError.js";
import { envs } from "../../config/envs.config.js";

const { saltRounds } = envs.auth;    

export const hashPassword = async ( password ) => {
    try {
        const hashedPass = await bcrypt.hash(password, Number(saltRounds));
        return hashedPass;  
    } catch (error) {
        throw new AuthError(
            'Error al intentar hashear la contraseña', 500, error);
        
    };
};

export const comparePassword = async ( plainPassword, hashedPass ) => {
    try {
       return await bcrypt.compare(plainPassword, hashedPass); 
    } catch (error) {
        throw new AuthError(
            'Error al intentar comparar la contraseña', 500, error);
        
    };
};
