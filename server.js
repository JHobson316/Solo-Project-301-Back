const express = require("express")
const axios = require("axios")
const app = express();
// const Event = require("./routes/Event");
const { model } = require("mongoose");

const PORT = 3000

app.post("/new-event", async (req, res) => {
    try{
        const newEvent = await Event.create({
            eName: "Test Meeting",
            eDescription: "Free money handed out",
            date: Date.now,
            updatedAt: Date.now
        })
        console.log(newEvent)
    } catch (err) {
        console.log(err)
    }
})


app.get("/", (req, res) => {
    console.log("Connected")
    res.send("Testing")
})
app.listen(PORT)