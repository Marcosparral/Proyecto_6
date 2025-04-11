import { NotFoundError } from "../errors/TypeError.js";

export const notFoundData = (data, message, details) => {
    if (!data) {
        throw new NotFoundError( 
            message || 'No se encontró la información solicitada',
            details || 'No se encontró la información solicitada' 
            );
        }

    if (Array.isArray(data) && data.length === 0) 
        throw new NotFoundError(
            message || 'No se encontró la información solicitada',
            details || 'No se encontró la información solicitada'
        );
    
    if (!data.isActive) 
        throw new NotFoundError(
            message || 'No se encontró la información solicitada',
            details || 'No se encontró la información solicitada'
        );
    
};

export const notFoundAllData = (data, message, details) => {
    if (data.isActive) 
        throw new NotFoundError(
            message || 'No se encontró la información solicitada',
            details || 'No se encontró la información solicitada'
        );
}