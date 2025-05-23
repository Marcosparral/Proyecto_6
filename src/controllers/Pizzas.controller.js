import { getPizzaByIdService, getAllPizzasServices, createPizzasService, updatePizzaByIdService, deletePizzaByIdService, permaDeletePizzaByIdService } from "../services/pizzas.service.js";
import { responseTemplate } from "../utils/templates/Response.template.js";    
import { buildFileUrl } from "../utils/files/BuildFileUrl.js";

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
        const pizza = await getPizzaByIdService(id);

        responseTemplate(res, pizza, 200, 
            `Pizza con el id ${id} encontrada con exito`);
        
        } catch (error) {
            next(error);
    };
};

export const createPizzas = async (req, res, next) => {
    try {
        let imageUrl = '';
        if (req.file) imageUrl = buildFileUrl(req, req.file.filename, 'pizzas');

        const dataPizzas = {
            ...req.body,
            imagen: imageUrl
        };

        const pizza = await createPizzasService(dataPizzas);

        responseTemplate(res, pizza, 201, 
            'Pizza creada con exito');

        } catch (error) {
            next(error);
        
    };
};

export const updatePizzaById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const dataPizza = req.body;

        const [pizzaUpdated, pizzaOld] = await updatePizzaByIdService(id, dataPizza);
        const custom = {
            oldData: pizzaOld
        };

        responseTemplate(res, pizzaUpdated, 201, 
            `Pizza con el id ${id} actualizada con exito`, custom);

        } catch (error) {
             next(error);
        
    };
};

export const deletePizzaById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const pizza = await deletePizzaByIdService(id);

        responseTemplate(res, pizza, 200, 
            `Pizza con el id ${id} eliminada con exito`,);
    } catch (error) {
        next(error);
        
    };
};

export const permaDeleteById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const pizza = await permaDeletePizzaByIdService(id);

        responseTemplate(res, pizza, 200, 
            `Pizza con el id ${id} eliminada permanentemente con exito`,);
    } catch (error) {
        next(error);
        
    }
};

