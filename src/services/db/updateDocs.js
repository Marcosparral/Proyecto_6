import { DataBaseError } from "../../errors/TypeError.js";
import { Pizzas } from "../../models/Pizzas.model.js";
import { User } from "../../models/User.model.js";


export const updateDocsDB = async () => {
    try {
       await Pizzas.updateMany(
        { isActive: { $exists: false } },
        { $set: { isActive: true } }
       );
       await User.updateMany(
        { imagen: { $exists: false } },
        { $set: { imagen: null } }
       )
    } catch (error) {
        throw new DataBaseError('Error al intentar actualizar el documento en la base de datos', 500, error);
        
    };
};