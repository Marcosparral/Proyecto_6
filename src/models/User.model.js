import mongoose from "mongoose";

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
        trim: true, },
    password: { type: String, required: true, trim: true },
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