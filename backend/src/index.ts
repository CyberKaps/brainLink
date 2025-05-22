
import express from "express"

const app = express();


app.get("/", (req, res) => {
    res.json({
        message: "hii there"
    })
})


app.listen(3000);