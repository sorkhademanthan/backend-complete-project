import mongoose from "mongoose";
// Correct path to your DB_NAME constant
import { DB_NAME } from "../constants.js"; // Adjust path based on where you put constants.js

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected successfully !!! DB_HOST: ${connectionInstance.connection.host} `);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process with failure
    }
}

export default connectDB;