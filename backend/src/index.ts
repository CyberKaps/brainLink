
import express from "express"
import 'dotenv/config'

const app = express();


app.get("/", (req, res) => {
    res.json({
        message: "hii there"
    })
})

app.listen(3001);