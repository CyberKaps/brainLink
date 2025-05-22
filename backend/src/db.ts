import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv"
import { string, tuple } from "zod";

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


const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true},

})

export const User = mongoose.model("User", userSchema); 



const tagSchema = new mongoose.Schema({
    title: { type: String }
})

export const Tag = mongoose.model("Tag", tagSchema);


const contentSchema = new mongoose.Schema({
    title: { type: String, required: true},
    link: { type: String },
    tags: { type: mongoose.Types.ObjectId, ref:"Tag"},
    type: String,
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true}

})

export const Content = mongoose.model("Content", contentSchema);