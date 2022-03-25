const express = require("express");
const cors = require("cors");

const app = express();
 const { randomCompliment, randomFortune, showName, createHouse, deleteImg} = require('./controller')

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", randomCompliment );

app.get("/api/fortune", randomFortune)

app.post("/api/name", showName)

app.post('api/houses', createHouse)

app.delete('api/img', deleteImg)
app.listen(4000, () => console.log("Server running on 4000"));
