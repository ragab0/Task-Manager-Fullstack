
export class Task {
  static numberOfTasks = 0;
  static d = new Date();
  static date = `${String(Task.d.getDate()).padStart(2, '0')}/${String(Task.d.getDate()).padStart(2, '0')}/${Task.d.getFullYear()}`;

  constructor() {
    this.id = ++Task.numberOfTasks;
    this.isCompleted = false;
  }

  static createTask(title=`A Task`, desc="", date=Task.date, priorety=false, folder="all") {
    return {
      title,
      desc,
      date,
      priorety,
      folder
    }
  }

  static getInitialTasks() {
    const task1 = Task.createTask("Legend", "Do'nt forget to update your old projects && better than making new ones", Task.date, "important", "main");
    const task2 = Task.createTask("Legend2", "it isn't by how many repos you have. believe me :)", Task.date, "important", "main");
    return [task1, task2];
  }

  static getInitialAddTaskFormData() {
    const task = Task.createTask();
    return task;
  }
}



export class User {

  static createInitialUserFormData(name="Legend", bio="fron-end developer", email="") {
    return {
      name,
      bio,
      email,
    }
  }

  static getInitialUserFormData() {
    const form = User.createInitialUserFormData();
    return form;
  }

}




export default {
  isLoading: false,
  error: null,

  modal: {
    isModal: false,
  },

  tasksGroup: {
    tasks: Task.getInitialTasks(),
    currentTasks: Task.getInitialTasks(),
  },

  addTask: {
    addTaskFormData: Task.getInitialAddTaskFormData(),
    addTaskSubmit: null,
  },

  user: {
    userFormData: User.getInitialUserFormData(),
    isSettings: true,
  },

  slides: {
    currentSlide: 0,
    maxSlides: null,
  },

  filtering: {
    currentType: "all",
    currentDir: "all",
    currentSort: "az",
    currentView: "squares",
    currentSearch: "",
  },

}