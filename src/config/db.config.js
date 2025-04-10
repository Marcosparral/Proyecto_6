import mongoose from "mongoose";
import { envs } from "./envs.config.js";
import { DataBaseError } from "../errors/TypeError.js";
import { updateDocsDB } from "../services/db/updateDocs.js";

const { db } = envs;

export const dbConnect = async ( {updateDocs = false} = {} ) => {
    try {
        await mongoose.connect(db.uri);
        console.log("Conectados a la base de datos de MongoDB");

        if (updateDocs) {
            await updateDocsDB();
            console.log("Documentos actualizados en la base de datos");
        };
    } catch (error) {
        console.error("Error al conectar a la base de datos de MongoDB", error);
        throw new DataBaseError(
            "Error al conectar a la base de datos de MongoDB", 500, error
        );
    };
};