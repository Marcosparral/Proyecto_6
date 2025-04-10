import { ValidationError } from "../errors/TypeError.js";

export const notFoundData = (data, message, details) => {
    if (!data) {
        throw new ValidationError( 
            message || 'No se encontró la información solicitada',
            details || 'No se encontró la información solicitada' 
            );
        }

    if (Array.isArray(data) && data.length === 0) 
        throw new ValidationError(
            message || 'No se encontró la información solicitada',
            details || 'No se encontró la información solicitada'
        );
    
    if (!data.isActive) 
        throw new ValidationError(
            message || 'No se encontró la información solicitada',
            details || 'No se encontró la información solicitada'
        );
    
};