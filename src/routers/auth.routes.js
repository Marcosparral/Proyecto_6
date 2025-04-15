import { Router } from 'express';   
import { register, getAllUsers, login } from '../controllers/auth.controller.js';

const router = Router()


// // Endpoint para registrar un nuevo usuario
router.post('/register', register);

// // Endpoint para obtener todos los usuarios
router.get('/users', getAllUsers);

// // Endpoint para loguear un usuario
router.post('/login', login);

export default router;  