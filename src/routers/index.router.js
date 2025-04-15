import { Router } from 'express';   
import authRouter from './auth.routes.js';
import pizzasRouter from './Pizzas.routes.js';


const router = Router();

router.use('/auth', authRouter);
router.use('/pizzas', pizzasRouter);

export default router;
