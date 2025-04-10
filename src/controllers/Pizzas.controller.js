import { getPizzaByIdService, getAllPizzasServices, createPizzasService, updatePizzaByIdService, deletePizzaByIdService } from "../services/pizzas.service.js";
import { responseTemplate } from "../utils/templates/Response.template.js";    

export const getAllPizzas = async (req, res, next) => {
    try {
        const pizzas = await getAllPizzasServices();

       responseTemplate(res, pizzas, 200, 'Pizzas encontradas con exito');

        } catch (error) {
            next(error);
    };
};

export const getPizzaById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const pizzas = await getPizzaByIdService(id);

        responseTemplate(res, pizzas, 200, 
            `Pizza con el id ${id} encontrada con exito`);
        
        } catch (error) {
            next(error);
    };
};

export const createPizzas = async (req, res, next) => {
    try {
        const dataPizza = req.body;
        const pizza = await createPizzasService(dataPizza);

        responseTemplate(res, pizza, 201, 
            'Pizza creada con exito', 'Pizza creada con exito');

        } catch (error) {
            next(error);
        
    };
};

export const updatePizzaById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const dataPizza = req.body;

        const [pizza, pizzaUpdated] = await updatePizzaByIdService(id, dataPizza);
        const custom = {
            oldData: pizza
        };

        responseTemplate(res, pizzaUpdated, 201, 
            `Pizza con el id ${id} actualizada con exito`, 'Pizza actualizada con exito', custom);

        } catch (error) {
             next(error);
        
    };
};

export const deletePizzaById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const pizza = await deletePizzaByIdService(id);

        responseTemplate(res, pizza, 200, 
            `Pizza con el id ${id} eliminada con exito`, 'Pizza eliminada con exito');
    } catch (error) {
        next(error);
        
    };
};