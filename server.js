const express = require("express")
const axios = require("axios")
const app = express();
const Event = require("./routes/Event")

const PORT = 3004

app.get("/", (req, res) => {
    console.log("Connected")
    res.send("Testing")
})
app.listen(PORT)