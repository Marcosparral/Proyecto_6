import mongoose, { Types } from 'mongoose';

const Schema = mongoose.Schema;

const pizzasSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    tipo_masa: {
        type: String,
        required: true,
        trim: true
    },
    valor: {
        type: Number,
        required: true
    },
    disponible: {
        type: Boolean,
        default: true
    },
}, {versionKey: false, timestamps: true});

export const Pizzas = mongoose.model("pizzas", pizzasSchema)