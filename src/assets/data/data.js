import { imgs } from "../imgs";
const { viewSquare, viewPaillers, viewBubbles, date } = imgs;


export const filterTypes = [
  {
    name: "sort by date"
  },{
    name: "completed"
  },{
    name: "uncompleted"
  },{
    name: "name"
  },
]


export const tasks = [
  {
    id: "Legend",
    title: "1",
    desc: "11111111",
    date: "11/1/1111",
    isCompleted: false,
    tasksType: "important",
    tasksFolder: "main"
  },{
    id: "2",
    title: "Legend1",
    desc: "Hey legend this is a virtual description",
    date: "11/1/1111",
    isCompleted: false,
    tasksType: "important",
    tasksFolder: "main"
  }
]


export const viewTypes = [
  {
    name: "squares",
    iconSrc: viewSquare,
  },{
    name: "paillers",
    iconSrc: viewPaillers,
  },{
    name: "bubbles",
    iconSrc: viewBubbles,
  },
]


export const timeTypes = [
  {
    name: "today",
  },{
    name: "week",
  },{
    name: "month",
  },
]
