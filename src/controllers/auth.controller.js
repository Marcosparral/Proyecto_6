import { responseTemplate } from "../utils/templates/Response.template.js";
import { registerService, getAllUsersService, loginService } from "../services/auth.service.js";

export const register = async (req, res, next) => {
    try {
        const userData = req.body;
        const user = await registerService(userData);
        responseTemplate(res, user, 201, 
            'Usuario registrado con exito');

    } catch (error) {
        res.status(500).json({
            message: 'Error al intentar registrar el usuario',
            error: error.message
        });
        
    };
};

export const login = async (req, res, next) => {
    try {
        const [ user, token ] = await loginService(req.body)
        const custom = {
            token
        };
        responseTemplate(res, user, 200, 'Usuario logueado con exito', custom);
    } catch (error) {
        next(error);
        };

};

export const getAllUsers = async (req, res, next) => {
    try {
       const users = await getAllUsersService(); 
       responseTemplate(res, users, 200, 'Usuarios encontrados con exito');
       console.log(users);
    } catch (error) {
        res.status(500).json({
            message: 'Error al intentar obtener los usuarios',
            error: error.message
        });
        
    };
};

