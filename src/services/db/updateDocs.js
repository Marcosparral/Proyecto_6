import { DataBaseError } from "../../errors/TypeError.js";
import { Pizzas } from "../../models/Pizzas.model.js";

export const updateDocsDB = async () => {
    try {
       await Pizzas.updateMany(
        { isActive: { $exists: false } },
        { $set: { isActive: true } }
       );
    } catch (error) {
        throw new DataBaseError('Error al intentar actualizar el documento en la base de datos', 500, error);
        
    };
};