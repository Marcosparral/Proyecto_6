import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const pizzasSchema = new Schema({
    nombre: { type: String, required: true  },
    tipo_masa: { type: String, required: true },
    valor: { type: Number, required: true },
    disponible: { type: Boolean, required: true },
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