import { Pizzas } from "../models/Pizzas.model.js";

export const getAllPizzas = async (req, res) => {
    try {
        const pizzas = await Pizzas.find();

        res.status(200).json({
            message: "Estas son las pizzas que tenemos disponibles",
            statusCode: 200,
            data: pizzas,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error al buscar las pizzas",
            statusCode: 500,
        });
    }
};