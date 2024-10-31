import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  folders: ["all", "todo", "doing", "done"],
  addFolderField: "",
};

const folderSlice = createSlice({
  name: "folder",
  initialState,
  reducers: {
    addFolder: function (state, action) {
      state.folders.push(action.payload.folder);
    },
  },
});

export default folderSlice.reducer;
export const folderActions = folderSlice.actions;
