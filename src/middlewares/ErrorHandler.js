import { CustomError } from "../errors/Custom.error.js"
import { InternalServerError } from "../errors/TypeError.js"

//eslint-disable-next-line 
export const errorHandler = (err, req, res, next) => {
    if(!(err instanceof CustomError)) {
        err = InternalServerError (
            err.message || "Error interno del servidor",
            err.statusCode || 500,
            err.details || "No se ha proporcionado detalles del error"
        );
    };

    const errorResponse = {
        status: 'ERROR',
        message: err.message,
        statusCode: err.statusCode || 500,
        details: err.details || "No se ha proporcionado detalles del error",
    };

    res.status(err.statusCode).json(errorResponse);

};

