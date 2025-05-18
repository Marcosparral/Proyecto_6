import { Preference } from 'mercadopago';
import client from '../../config/MercadoPago.config.js';
import { envs } from '../../config/envs.config.js';
import { PaymentError } from '../../errors/TypeError.js';

const { frontendUrl } = envs;

export const mercadopagoService = async ( cart ) => {
    try {
        
        const items = cart.map((product) => ({
                title: product.nombre,
                unit_price: product.valor,
                quantity: product.quantity,
                currency_id: 'CLP',
            
        }))
    
        const body = {
            items,
            back_urls: {
                approved: `${frontendUrl}/mercadopago/status?status=approved`,
                failed: `${frontendUrl}/mercadopago/status?status=failed`,
                pending: `${frontendUrl}/mercadopago/status?status=pending`,
            },

        };
    
        const preference = new Preference(client);
        const response = await preference.create({ body });
    
        return response;
    } catch (error) {
        console.error(error);
        throw new PaymentError('Error al crear la preferencia de pago', 500, error);
    }
};
