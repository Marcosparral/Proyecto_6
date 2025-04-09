import { NotFoundError } from "../errors/TypeError.js";
import { Pizzas } from "../models/Pizzas.model.js";

export const getAllPeliculasServices = async () => {
    try {
        const pizzas = await Pizzas.find();

        if(pizzas.length === 0 || pizzas === null) {
            throw new NotFoundError(
                'UPS! No hay pizzas disponobles en este minuto', 
                'Lamentablemente no encontramos las pizzas que buscas'
            );
        };

    } catch (error) {
        throw new NotFoundError(
            'Error al intentar obtener las pizzas', 500, error);
    }
}

export const getPizzaByIdService = async ( id ) => {
    try {
        const pizza = await Pizzas.findById(id);
        if (!pizza) {
            throw new NotFoundError(
                `UPS! No pudimos encontrar la pizza con el id ${id}`, 
                'Lamentablemente no encontramos la pizza que buscas'
            );
        }
        return pizza;
    } catch (error) {
        throw new NotFoundError(`Error al intentar obtener la pizza con el id ${id}`, 500, error);
    }
}

