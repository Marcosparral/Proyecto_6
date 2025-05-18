import { MercadoPagoConfig } from 'mercadopago';
import { envs } from './envs.config.js';

const { mercadopagoToken } = envs;

const client = new MercadoPagoConfig({
    accessToken: mercadopagoToken,
    options: { sandbox: true }
});

export default client
