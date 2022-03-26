const express = require("express");
const cors = require("cors");

const app = express();

const { randomCompliment, randomFortune } = require("./controllers/controller.js")
const { getStudents, addStudent, updateStudents, deleteStudents } = require('./controllers/studentController.js')

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", randomCompliment);

app.get("/api/fortune", randomFortune)


app.get('/api/students', getStudents),
app.post('/api/students', addStudent),
app.put('/api/students/:id', updateStudents),
app.delete('/api/students/:id', deleteStudents),


app.listen(4000, () => console.log("Server running on 4000"));
