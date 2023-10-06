import { nanoid } from "nanoid";

export class Task {
  static lastColor = null;
  static colors = ["#FDF3B5", "#D1EAEE", "#FEDADA", "#FFD4AA"];
  static date = `${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2, 0)}-${String(new Date().getDate()).padStart(2, 0)}`;


  static createTask(notColor, title=`A Task`, desc="", folder="main") {
    return {
      id: nanoid(),
      date: Task.date,
      color: this.getColor(notColor),
      isCompleted: false,
      title,
      desc,
      folder,
    }
  }

  static getColor(notColor) {
    let newColor = Task.colors[Math.floor(Math.random() * Task.colors.length)];
    while (newColor === notColor) {
      newColor = Task.colors.at(Math.floor(Math.random() * Task.colors.length));
    }
    Task.lastColor = newColor;
    return newColor;
  }

  static getInitialTasks() {
    const task1 = Task.createTask(null, "water the task", "# Water\n## Drink Water\n### 8Glasses of water\n#### Drink 8 glasses of water\n ##### ___waaaaaaaaaaaaaaaaaaaaaaa___", "main");
    const task2 = Task.createTask(task1.color, "Legend2", "it isn't by how many repos you have. believe me :)", "main");
    return [task1, task2];
  }

  static getInitialTaskFormData() {
    return {
      title:"A Task",
      date: Task.date,
      desc:"",
      folder:"main",
    };
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
  version: 1,
  isSettings: false,

  // 01
  modal: {
    isTaskModal: false,
    isAddingFolder: false,
  },

  // 02
  filtering: {
    currentDate: "today",
    currentDir: "all",
    currentSort: "newer",
    currentView: "squares",
    currentSearch: "",
  },

  // 03
  user: {
    userFormData: User.getInitialUserFormData(),
    isSettings: true,
  },

  // 04
  slides: {
    currentSlide: 0,
    maxSlides: null,
  },

  // 05
  folder: {
    folders: ["main", "projects", "daily"],
    addFolderField: "",
  },

  tasks: {
    tasksList: Task.getInitialTasks(),
    currentTasksList: [],
  },

  task: {
    taskFormData: Task.getInitialTaskFormData(),
    taskSubmit: null,
    isTaskEditted: false,
  },
}