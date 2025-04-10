import { Router } from 'express';
import { getAllPizzas, getPizzaById, createPizzas, updatePizzaById, deletePizzaById } from '../controllers/Pizzas.controller.js';

const router = Router();

router.get('/pizzas', getAllPizzas);
router.get('/pizzas/:id', getPizzaById);
router.post('/pizzas', createPizzas);
router.put('/pizzas/:id', updatePizzaById);
router.delete('/pizzas/:id', deletePizzaById);

export default router;