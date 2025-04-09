import { getPizzaByIdService, getAllPeliculasServices } from "../services/pizzas.service.js";


export const getAllPizzas = async (req, res, next) => {
    try {
        const pizzas = await getAllPeliculasServices();

        res.status(200).json({
            message: "Estas son las pizzas que tenemos disponibles",
            statusCode: 200,
            data: pizzas,
        });
    } catch (error) {
        next(error);
    };
};

export const getPizzaById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const pizzas = await getPizzaByIdService(id);
        res.status(200).json({
            message: `Esta es la pizza con el id ${id}que tenemos disponible`,
            statusCode: 200,
            data: pizzas,
        })
        
        } catch (error) {
        next(error);
    };
};