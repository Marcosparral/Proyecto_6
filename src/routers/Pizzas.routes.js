import { Router } from 'express';
import { getAllPizzas, getPizzaById, createPizzas, updatePizzaById, deletePizzaById, permaDeleteById } from '../controllers/Pizzas.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';


const router = Router();


// // Endpoint para obtener todas las pizzas
router.get('/',  authMiddleware, getAllPizzas);

// // Endpoint para obtener una pizza por id
router.get('/:id', getPizzaById);

// // Endpoint para crear una nueva pizza
router.post('/create/', createPizzas);

// // Endpoint para actualizar una pizza por id
router.put('/update/:id', updatePizzaById);

// // Endpoint para eliminar una pizza por id
router.delete('/delete/:id', deletePizzaById);

// // Endpoint para eliminar permanentemente una pizza por id
router.delete('/permadelete/:id', permaDeleteById)

export default router;