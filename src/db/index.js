
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is missing in .env");
        }

        const connectionInstance = await mongoose.connect(
            process.env.MONGODB_URI,
            {
                dbName: DB_NAME
            }
        );

        console.log(
            `MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
        );

    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        throw error;
    }
};

export default connectDB;
