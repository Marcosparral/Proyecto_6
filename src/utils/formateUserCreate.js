import { ValidationError } from "../errors/TypeError.js";

export const formateUserCreate = (hashPassword, ...rest) => {
    const [
        nombre,
        apellido,
        telefono,
        email,
        password,
        isAdmin = false,
 ] = rest;

    if (!nombre || !apellido || !telefono || !email || !password) {
        throw new ValidationError(
            'Error al intentar registrar el usuario',
            'Faltan datos obligatorios para registrar el usuario'
        );
    };

    return {
        nombre,
        apellido,
        telefono,
        email,
        password: hashPassword,
        isAdmin,
    };
}