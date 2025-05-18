import { Router } from 'express';   
import authRouter from './auth.routes.js';
import pizzasRouter from './Pizzas.routes.js';
import paymentRouter from './Payment.routes.js';


const router = Router();

router.use('/auth', authRouter);
router.use('/pizzas', pizzasRouter);
router.use('/payment', paymentRouter);

export default router;
