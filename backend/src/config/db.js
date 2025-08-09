import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MONGODB CONNECTED SUCCESFULLY");
    } catch (error) {
        console.error("Eroor connecting to MONGODB", error);
        process.exit(1);
    }
}