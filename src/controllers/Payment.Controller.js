import { mercadopagoService } from "../services/payments/mercadopago.service.js";
import { responseTemplate } from "../utils/templates/Response.template.js";

export const createPayment = async (req, res, next) => {
    try {
        const { cart } = req.body;
        const preferenceResult =await mercadopagoService(cart);

        responseTemplate(res, preferenceResult, 200, 'Preferencia de compra creada con exito')
    } catch (error) {
        netx(error);
    }
}