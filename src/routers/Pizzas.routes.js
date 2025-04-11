import { Router } from 'express';
import { getAllPizzas, getPizzaById, createPizzas, updatePizzaById, deletePizzaById, permaDeleteById } from '../controllers/Pizzas.controller.js';

const router = Router();

router.get('/pizzas', getAllPizzas);
router.get('/pizzas/:id', getPizzaById);
router.post('/pizzas/create/', createPizzas);
router.put('/pizzas/update/:id', updatePizzaById);
router.delete('/pizzas/delete/:id', deletePizzaById);
router.delete('/pizzas/permadelete/:id', permaDeleteById)

export default router;