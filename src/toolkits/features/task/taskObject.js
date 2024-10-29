import { nanoid } from "nanoid";

export class Task {
  static lastColor = null;
  static colors = ["#FDF3B5", "#D1EAEE", "#FEDADA", "#FFD4AA"];
  static d = new Date();
  static date = `${Task.d.getFullYear()}-${String(
    Task.d.getMonth() + 1
  ).padStart(2, 0)}-${String(Task.d.getDate()).padStart(2, 0)}`;

  static create(notColor, title = `A Task`, desc = "", folder = "main") {
    return {
      id: nanoid(),
      date: Task.date,
      fullDate: Task.d,
      color: this.getColor(notColor),
      isCompleted: false,
      title,
      desc,
      folder,
    };
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
    const task1 = Task.create(
      null,
      "water the task",
      "# Water\n## Drink Water\n### 8Glasses of water\n#### Drink 8 glasses of water\n ##### ___waaaaaaaaaaaaaaaaaaaaaaa___",
      "main"
    );
    const task2 = Task.create(
      task1.color,
      "Legend2",
      "it isn't by how many repos you have. believe me :)",
      "main"
    );
    return [task1, task2];
  }

  static getInitialTaskFormData() {
    return {
      title: "A Task",
      date: Task.date,
      desc: "",
      folder: "main",
    };
  }
}
