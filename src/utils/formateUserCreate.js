import { ValidationError } from "../errors/TypeError.js";

export const formateUserCreate = (hashedPassword, ...rest) => {
    const [
        nombre,
        apellido,
        telefono,
        email,
        imagen,
        isAdmin = false,
 ] = rest;

    if (!nombre || !apellido || !telefono || !email ) {
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
        password: hashedPassword,
        imagen: imagen || null,
        isAdmin,
    };
};