import mongoose from "mongoose";
import { envs } from "./envs.config.js";
import { DataBaseError } from "../errors/TypeError.js";

const { db } = envs;

export const dbConnect = async () => {
    try {
        await mongoose.connect(db.uri);
        console.log("Conectados a la base de datos de MongoDB");
    } catch (error) {
        console.error("Error al conectar a la base de datos de MongoDB", error);
        throw new DataBaseError(
            "Error al conectar a la base de datos de MongoDB", 500, error
        );
    }
}