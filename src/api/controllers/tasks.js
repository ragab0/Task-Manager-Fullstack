let tasks = [
  {
    id: 1,
    name: "Just 5 cup of tee per day, legend",
    desc: "Don't hesitate, I'll be angry....",
    completed: false,
  },{
    id: 2,
    name: "Wake up early",
    desc: "Waking up helping me in....",
    completed: false,
  },{
    id: 3,
    name: "Please, interest in your linkedin",
    desc: "Open it at least elsabt and eltalat, at least two per week....",
    completed: false,
  },
]


class TaskCreator {
  static count = tasks.length ?? 0;

  constructor(name, desc) {
    this.id = (TaskCreator.count += 1);
    this.name = name || null;
    this.desc = desc || null;
    this.completed= false;
    tasks.push(this);
  }

  static failed(msg) {
    return {
      success: false,
      data: {
        msg,
      }
    }
  }

  static successed(data) {
    return {
      success: true,
      data,
    }
  }
}


function getTasks(req, res) {
  res.json(TaskCreator.successed(tasks));
}


function postTasks(req, res) {
  const { name, desc } = req.body;
  const newTask = new TaskCreator(name, desc);
  res.json(TaskCreator.successed({task: newTask}));
}


function getTask(req, res) {
  const { id } = req.params;
  const task = tasks.find(t => t.id == id) || null; //Better than undefiend :DD;
  res.json(task ? TaskCreator.successed({task}) : TaskCreator.failed(`There is no task with the id: ${id}`));
}


function putTask(req, res) {
  const { task: newTask } = req.body;
  const { id } = newTask || {};
  const task = tasks.find(t => t.id == id) || null; //Better than undefiend :DD;
  res.json(task ? ((tasks = tasks.map(t => t.id == id ? newTask : t)) && TaskCreator.successed({newTask})) : TaskCreator.failed(`There is no task with the id: ${id}`));
}


function deleteTask(req, res) {
  const { id } = req.params;
  const task = tasks.find(t => t.id == id) || null; //Better than undefiend :DD;
  res.json(task ? ((tasks = tasks.filter(t => t.id != id)) && TaskCreator.successed()) : TaskCreator.failed(`There is no task with the id: ${id}`));

  
}


module.exports = {
  getTasks,
  postTasks,
  getTask,
  putTask,
  deleteTask,
}