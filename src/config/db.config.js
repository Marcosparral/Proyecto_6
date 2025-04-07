import mongoose from "mongoose";
import { envs } from "./envs.config.js";

const { connectDB } = envs;

export const db = async () => {
    try {
        await mongoose.connect(connectDB.uri)
        console.log("Conectados a la base de datos de MongoDB");
    } catch (error) {
        console.error("Error al conectar a la base de datos de MongoDB", error);
    }
}