import { CustomError } from "./Custom.error.js";

export class ValidationError extends CustomError {
    constructor(message, details) {
        super(message || 'Error de validacion', 400, details);
    }
};

export class NotFoundError extends CustomError {
    constructor(message, details) {
        super(message || 'No se encunetra el elemento', 404, details);
    }
};

export class DataBaseError extends CustomError {
    constructor(message, details) {
        super(message || 'Error de base de datos', statusCode || 500, details);
    }
};

export class InternalServerError extends CustomError {
    constructor(message, details) {
        super(message || 'Error interno del servidor', statusCode || 500, details);
    }
};

export class AuthError extends CustomError {
    constructor(message, statusCode, details) {
        super(message || 'Error de autenticacion', statusCode || 401, details);
    }
};

export class FileServiceError extends CustomError {
    constructor(message, details) {
        super(message || 'Error en el servicio de archivos', statusCode || 400, details);
    }
};

export class PaymentError extends CustomError {
    constructor(message, details) {
        super(message || 'Error en el servicio de pagos', statusCode || 400, details);
    }
}