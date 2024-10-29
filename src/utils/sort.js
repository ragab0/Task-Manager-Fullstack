export function getSortingVersion(tasks, by) {
  return tasks.sort((a, b) => {
    // const fullDate, isCompleted, title
    if (by === "newer") {
      return (
        new Date(Date.parse(b.fullDate)) - new Date(Date.parse(a.fullDate))
      );
    } else if (by === "az") {
      return a.title < b.title ? -1 : 1;
    } else if (by === "za") {
      return a.title > b.title ? -1 : 1;
    } else if (by === "completed") {
      return a.isCompleted && !b.isCompleted ? -1 : 1;
    } else if (by === "uncompleted") {
      return !a.isCompleted && b.isCompleted ? -1 : 1;
    }
  });
}

// newer
// az
// za
// completed
// uncompleted

/**
  {
    "id": "NGsk5afZmM7NokjqNfY4D",
    "date": "2023-10-25",
    "fullDate": "2023-10-25T04:12:34.192Z",
    "color": "#FEDADA",
    "isCompleted": false,
    "title": "water the task",
    "desc": "# Water\n## Drink Water\n### 8Glasses of water\n#### Drink 8 glasses of water\n ##### ___waaaaaaaaaaaaaaaaaaaaaaa___",
    "folder": "main"
  }
 */
