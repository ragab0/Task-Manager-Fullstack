import { svgs } from "../imgs";
const { ViewSquares, ViewPaillers, ViewBubbles } = svgs;

export const selectTypes = {
  SELECT_FILTER_DATE: {},
  SELECT_FILTER_SORT: {},
  SELECT_TASK_FOLDER: {},
};

export const selectTimeFilter = [
  {
    name: "today",
    value: "today",
  },
  {
    name: "week",
    value: "week",
  },
  {
    name: "month",
    value: "month",
  },
];

export const selectSortFilter = [
  {
    name: "sort by newer",
    value: "newer",
  },
  {
    name: "name (a-z)",
    value: "az",
  },
  {
    name: "name (z-a)",
    value: "za",
  },
  {
    name: "completed",
    value: "completed",
  },
  {
    name: "uncompleted",
    value: "uncompleted",
  },
];

export const viewTypes = [
  {
    name: "squares",
    Ico: ViewSquares,
  },
  {
    name: "paillers",
    Ico: ViewPaillers,
  },
];

const prioretyTypes = [
  {
    name: "importnat",
    value: "importnat",
  },
  {
    name: "urgent",
    value: "urgent",
  },
  {
    name: "importnat",
    value: "importnat",
  },
];

export const accountFields = [
  {
    name: "name",
    type: "text",
  },
  {
    name: "bio",
    type: "text",
  },
  {
    name: "email",
    type: "email",
  },
];
