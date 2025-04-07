import { Router } from 'express';
import { getAllPizzas } from '../controllers/Pizzas.controller.js';

const router = Router();

router.get('/pizzas', getAllPizzas);

export default router;