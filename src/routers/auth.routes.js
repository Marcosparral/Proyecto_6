import { Router } from 'express';   
import { register, getAllUsers, login, updateUserById } from '../controllers/auth.controller.js';
import { verifyAdmin } from '../middlewares/veriryAdmin.Middleware.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { uploadPhoto } from '../middlewares/uploadFile.Middleware.js';


const router = Router()


// Endpoint para registrar un nuevo usuario
router.post('/register', uploadPhoto('users', 'file'), register);  //Ruta probada con exito

// Endpoint para obtener todos los usuarios (solo admin)
router.get('/users', authMiddleware, verifyAdmin, getAllUsers);  //Ruta probada con exito

// Endpoint para loguear un usuario
router.post('/login', login);  //Ruta probada con exito

// Endpoint para actualizar un usuario por id
router.put('/update/:id', updateUserById);

export default router;  

// authMiddleware, verifyAdmin, 