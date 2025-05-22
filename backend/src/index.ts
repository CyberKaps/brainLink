
import express from "express"
import 'dotenv/config'
import { userRouter } from "./routes/user";

const app = express();
app.use(express.json());


app.use("/api/v1/user", userRouter);



app.listen(3001);