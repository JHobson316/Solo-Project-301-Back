const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()

const inMemoryDB = {};

router.get("/", async (req, res) => {
    res.send("Event List")
})

router.get("/new", (req, res) => {
    res.send("New Event Form")
})

res.post("/", (req, res) => {
    res.send("Create Event")
})

router.get("/:id", (req, res) => {
    res.send("/")
})

class Event{
    constructor(event){
        this.name = event.name;
    }
}