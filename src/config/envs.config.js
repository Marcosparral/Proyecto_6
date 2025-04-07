import dotenv from 'dotenv';


dotenv.config();

export const envs = {
    port: process.env.PORT ||3000,
    connectDB: {
        uri: process.env.MONGO_URI
    }
}