import { svgs } from "../imgs";
const { ViewSquares, ViewPaillers, ViewBubbles, date } = svgs;


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
    Ico: ViewSquares,
  },{
    name: "paillers",
    Ico: ViewPaillers,
  },{
    name: "bubbles",
    Ico: ViewBubbles,
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


const prioretyTypes = [
  {
    name: "importnat",
  },{
    name: "urgent",
  },{
    name: "importnat",
  },
]


export const accountFields = [
  {
    name: "name",
    type: "text"
  },{
    name: "bio",
    type: "text"
  },{
    name: "email",
    type: "email"
  },
]
