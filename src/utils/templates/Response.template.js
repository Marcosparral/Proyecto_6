

export const responseTemplate = (res, data, statusCode, message, custom) => {
    res.status(statusCode).json({
        message: message || 'Peticion procesada con exito',
        statusCode,
        data,
        ...custom
    });
};
