import { Router } from 'express';
import { getAllPizzas, getPizzaById, createPizzas, updatePizzaById, deletePizzaById, permaDeleteById } from '../controllers/Pizzas.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { verifyAdmin } from '../middlewares/veriryAdmin.Middleware.js';
import { uploadPhoto } from '../middlewares/uploadFile.Middleware.js';

const router = Router();


// Endpoint para obtener todas las pizzas
router.get('/', getAllPizzas);  // Ruta probada con exito

// Endpoint para obtener una pizza por id
router.get('/:id', getPizzaById);  // Ruta probada con exito

// Endpoint para crear una nueva pizza
router.post('/create/', authMiddleware, uploadPhoto('pizzas', 'file'), createPizzas);  // Ruta probada con exito

// Endpoint para actualizar una pizza por id
router.put('/update/:id', authMiddleware, updatePizzaById);  // Ruta probada con exito, pero con un "pero".

// // Endpoint para eliminar una pizza por id
router.delete('/delete/:id', authMiddleware, verifyAdmin, deletePizzaById);  // Ruta probada con exito

// // Endpoint para eliminar permanentemente una pizza por id
router.delete('/permadelete/:id', authMiddleware, verifyAdmin, permaDeleteById)  // Ruta probada con exito

export default router;