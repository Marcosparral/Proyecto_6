import { Router } from "express";
import { createPayment } from "../controllers/Payment.Controller.js";

const router = Router();

router.post ('/create-payment', createPayment);

export default router;