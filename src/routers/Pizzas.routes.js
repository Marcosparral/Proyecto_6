import { Router } from 'express';
import { getAllPizzas, getPizzaById, createPizzas } from '../controllers/Pizzas.controller.js';

const router = Router();

router.get('/pizzas', getAllPizzas);
router.get('/pizzas/:id', getPizzaById);
router.post('/pizzas', createPizzas);

export default router;