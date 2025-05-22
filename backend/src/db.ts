import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();


const connectDB = async () => {

    try {
    await mongoose.connect(process.env.MongoURL as string);
    console.log("Database connected")
    } catch(e){
        console.error("fat gaya bc", e);
        process.exit(1);
    }
}

connectDB();