import mongoose from "mongoose";
import { URL_IMAGE_REGEX } from "../utils/constants/Regex.js";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    nombre: { type: String, required: true, trim: true },
    apellido: { type: String, required: true },
    telefono: { 
        type: String,
        required: true,
        trim: true },
    email: { 
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/.+@.+\..+/,
        'El correo electrónico no es válido']},
    password: { type: String, required: true, trim: true },
    imagen: { 
        type: String,
        trim: true,
        validate: {
            validator(value) {
                return URL_IMAGE_REGEX.test(value);
            },
            message: 'La URL de la imagen no es válida'
        } 
    },
    isActive: { type: Boolean, default: true },
    isAdmin: { type: Boolean, default: false },
}, {
    toJSON: {
        transform: (doc, ret) => {
            delete ret.isActive;
            delete ret.password;
            delete ret.isAdmin
            return ret;
        }
    },
    versionKey: false,
    timestamps: false
});

export const User = mongoose.model('user', userSchema);