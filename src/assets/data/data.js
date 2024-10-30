import { svgs } from "../imgs";
const { ViewSquares, ViewPaillers, ViewBubbles } = svgs;

export const selectTypes = {
  SELECT_FILTER_DATE: {},
  SELECT_FILTER_SORT: {},
  SELECT_TASK_FOLDER: {},
};

export const selectTimeFilter = [
  {
    name: "All time",
    value: "all",
  },
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

export const accountFields = [
  {
    name: "name",
    type: "text",
    mandatory: true,
  },
  {
    name: "bio",
    type: "text",
    mandatory: true,
  },
  // {
  //   name: "photo",
  //   type: "url",
  // },
  // {
  //   name: "email",
  //   type: "email",
  // },
];
