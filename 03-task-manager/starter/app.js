const express = require("express");
const tasksRoute = require("./routes/tasks");
const app = express();


// Setting up the static files;
app.use(express.static("./public"));

// Parsing upcoming json data;
app.use(express.json());

// 
app.use("/api/tasks", tasksRoute)

app.listen("3000", function() {
  console.log("Congrats! Server now is running and listening for 3000");
})