const express = require('express')
const cors = require("cors")
const app = express();
const port = 5000;
const {
  getTasks,
  postTasks,
  getTask,
  putTask,
  deleteTask,
} = require("./controllers/tasks");


// Parses data that is on req.body to json data;
app.use(express.json());

// Enabling corses
app.use(cors());


// Setting up the routes and them methods;
app.get("/api/tasks", getTasks );
app.post("/api/tasks", postTasks );
app.get("/api/tasks/:id", getTask );
app.put("/api/tasks/:id", putTask );
app.delete("/api/tasks/:id", deleteTask );


app.listen(port, function() {
  console.log(port, "now is listening!");
})