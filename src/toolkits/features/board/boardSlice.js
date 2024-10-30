import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boards: ["initialBoard"],
  addBoardField: "",
};

const folderSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    boardAddFieldSetter: function (state, action) {
      state.addBoardField = action.payload;
    },
    folderAddSubmitSetter: function (state) {
      const newBoard = String(state.addBoardField).toLocaleLowerCase();
      if (newBoard && !state.boards.includes(newBoard)) {
        state.boards.push(newBoard);
        state.addFolderField = "";
      } else {
      }
    },
  },
});

export default boardslice.reducer;
export const folderActions = boardslice.actions;
