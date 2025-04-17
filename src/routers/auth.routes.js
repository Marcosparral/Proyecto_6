import { Router } from 'express';   
import { register, getAllUsers, login, updateUserById } from '../controllers/auth.controller.js';
import { verifyAdmin } from '../middlewares/veriryAdmin.Middleware.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';


const router = Router()


// // Endpoint para registrar un nuevo usuario
router.post('/register', register);

// // Endpoint para obtener todos los usuarios
router.get('/users', authMiddleware, verifyAdmin, getAllUsers);

// // Endpoint para loguear un usuario
router.post('/login', login);

// // Endpoint para actualizar un usuario por id
router.put('/update/:id', authMiddleware, verifyAdmin, updateUserById);

export default router;  