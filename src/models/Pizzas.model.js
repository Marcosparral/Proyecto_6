import mongoose from 'mongoose';
import { URL_IMAGE_REGEX } from '../utils/constants/Regex.js';

const Schema = mongoose.Schema;

const pizzasSchema = new Schema({
    nombre: { type: String, required: true  },
    descripcion: { type: String, required: true },
    valor: { type: Number, required: true, min: [0, 'El valor no puede ser menor a 0'] },
    disponible: { type: Boolean, required: true },
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
}, {toJSON: {
        transform: (doc, ret) => {
            delete ret.isActive;
            return ret;
        }
},

    versionKey: false,
    timestamps: false });

export const Pizzas = mongoose.model('pizzas', pizzasSchema);