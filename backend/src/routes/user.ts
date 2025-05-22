
import { User } from "../db";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { z } from "zod";
import { Request, Response } from "express";
import { Router } from "express";



export const userRouter = Router();

userRouter.post("/signup",async (req: any , res: any) => {

    const bodyField = z.object({
        username: z.string().min(3).max(10),
        password: z.string().min(8).max(20)
    })

    const parsedData = bodyField.safeParse(req.body);

    if(!parsedData){
        return res.status(400).json({
            message: "Validation error",
        });
    }

    const { username , password } = req.body;

    const existingUser = await User.findOne({
        username
    })

    if (existingUser){
        return res.status(411).json({
                message: "Email already taken"
            })
    }

    const user = await User.create({
        username,
        password
    })


    res.status(200).json({
        message: "signup succeed"
    })
})



