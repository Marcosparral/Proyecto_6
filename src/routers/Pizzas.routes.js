import { Router } from 'express';
import { getAllPizzas, getPizzaById } from '../controllers/Pizzas.controller.js';

const router = Router();

router.get('/pizzas', getAllPizzas);
router.get('/pizzas/:id', getPizzaById);

export default router;