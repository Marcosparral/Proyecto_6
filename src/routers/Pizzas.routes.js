import { Router } from 'express';
import { getAllPizzas, getPizzaById, createPizzas, updatePizzaById, deletePizzaById, permaDeleteById } from '../controllers/Pizzas.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { verifyAdmin } from '../middlewares/veriryAdmin.Middleware.js';

const router = Router();


// // Endpoint para obtener todas las pizzas
router.get('/', getAllPizzas);

// // Endpoint para obtener una pizza por id
router.get('/:id', getPizzaById);

// // Endpoint para crear una nueva pizza
router.post('/create/', authMiddleware, createPizzas);

// // Endpoint para actualizar una pizza por id
router.put('/update/:id', authMiddleware, updatePizzaById);

// // Endpoint para eliminar una pizza por id
router.delete('/delete/:id', authMiddleware, verifyAdmin, deletePizzaById);

// // Endpoint para eliminar permanentemente una pizza por id
router.delete('/permadelete/:id', authMiddleware, verifyAdmin, permaDeleteById)

export default router;