
import express from "express"
import 'dotenv/config'
import { userRouter } from "./routes/user";

const app = express();



app.use("api/v1/user", userRouter);


// app.get("/", (req, res) => {
//     res.json({
//         message: "hii there"
//     })
// })

app.listen(3001);