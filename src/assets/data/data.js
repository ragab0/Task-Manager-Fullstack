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


export const taskColors = [
  "#FDF3B5", 
  "#D1EAEE", 
  "#FEDADA", 
  "#FFD4AA"
];


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