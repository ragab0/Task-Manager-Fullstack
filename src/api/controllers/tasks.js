const tasks = [
  {
    id: 1,
    name: "Just 5 cup of tee per day, legend",
    desc: "Don't hesitate, I'll be angry...."
  },{
    id: 2,
    name: "Wake up early",
    desc: "Waking up helping me in...."
  },{
    id: 3,
    name: "Please, interest in your linkedin",
    desc: "Open it at least elsabt and eltalat, at least two per week...."
  },
]


function getTasks(req, res) {
  console.log(req.headers);
  res.json({
    success: true,
    data: {
      tasks
    }
  })
}


function postTasks(req, res) {
  console.log(req);
  const { name, desc } = req.body;
  const newTask = {
    id: tasks.at(-1).id + 1 || 1,
    name,
    desc,
  }

  tasks.push(newTask);
  res.json({
    success: true,
    data: {
      task: newTask
    }
  })
}


function getTask(req, res) {
  const { id } = req.body;

}


function putTask(req, res) {
  const { id } = req.body;
}


function deleteTask(req, res) {
  const { id } = req.body;
}


module.exports = {
  getTasks,
  postTasks,
  getTask,
  putTask,
  deleteTask,
}