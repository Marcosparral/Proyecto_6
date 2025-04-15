import { Pizzas } from "../models/Pizzas.model.js";
import { NotFoundError } from "../errors/TypeError.js";
import { notFoundData, notFoundAllData } from "../utils/Validate.js";


export const getAllPizzasServices = async () => {
    try {
        const pizzas = await Pizzas.find( { isActive: true } ).select('-isAcive');
         
        notFoundAllData(pizzas, 
            'UPS! No hay pizzas disponibles en este minuto', 
            'Lamentablemente no encontramos las pizzas que buscas' );
    
        return pizzas;

    } catch ( error ) {
        throw new NotFoundError(
            'Error al intentar obtener las pizzas', 500, error);
    };
};

export const getPizzaByIdService = async ( id ) => {
    try {
        const pizza = await Pizzas.findById( id, { isActive: true } );

        notFoundData(pizza,
            `UPS! No pudimos encontrar la pizza con el id ${ id }`,
            'Lamentablemente no encontramos la pizza que buscas' )

        return pizza;

    } catch ( error ) {
        throw new NotFoundError(
            `Error al intentar obtener la pizza con el id ${ id }`, 500, error );
    };
};

export const createPizzasService = async ( dataPizza ) => {
    try {
        const pizza = await Pizzas.create( dataPizza );

        return pizza;
    } catch ( error ) {
        throw new NotFoundError(
            'Error al intentar crear la pizza', 500, error );
    };
};

export const updatePizzaByIdService = async ( id, dataPizza ) => {
    try {
        const pizzaOld = await Pizzas.findOneAndUpdate( { _id: id, isActive: true }, dataPizza );

        const pizzaUpdated = await Pizzas.findById( id, { isActive: true } );

        notFoundData( pizzaOld,
            `UPS! No pudimos encontrar la pizza con el id ${ id }`,
            'Lamentablemente no encontramos la pizza que buscas')

        return [ pizzaOld, pizzaUpdated ];
    } catch ( error ) {
        throw new NotFoundError(
            `Error al intentar actualizar la pizza con el ID ${ id }`, 500, error );
        
    };
};

export const deletePizzaByIdService = async ( id ) => {
    try {
        const pizza = await Pizzas.findByIdAndUpdate( id, { isActive: false } );

        notFoundData(pizza,
            `UPS! No pudimos encontrar la pizza con el id ${ id }`,
            'Lamentablemente no encontramos la pizza que buscas' )

        return pizza;
    } catch ( error ) {
        throw new NotFoundError(
            `Error al intentar eliminar la pizza con el id ${ id }`, 500, error );
    };
};

export const permaDeletePizzaByIdService = async ( id ) => {
    try {
        const pizza = await Pizzas.findByIdAndDelete( id );

        notFoundData(pizza,
            `UPS! No pudimos encontrar la pizza con el id ${ id }`,
            'Lamentablemente no encontramos la pizza que buscas' )

        return pizza;
    } catch ( error ) {
        throw new NotFoundError(
            `Error al intentar eliminar la pizza con el id ${ id }`, 500, error );
    };
};