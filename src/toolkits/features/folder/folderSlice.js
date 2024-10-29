const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  folders: ["main", "projects", "daily"],
  addFolderField: "",
};

const folderSlice = createSlice({
  name: "folder",
  initialState,
  reducers: {
    folderAddFieldSetter: function (state, action) {
      state.addFolderField = action.payload;
    },
    folderAddSubmitSetter: function (state) {
      const newFolder = String(state.addFolderField).toLocaleLowerCase();
      if (
        newFolder &&
        newFolder !== "all" &&
        !state.folders.includes(newFolder)
      ) {
        state.folders.push(newFolder);
        state.addFolderField = "";
      }
    },
  },
});

module.exports = folderSlice.reducer;
module.exports.folderActions = folderSlice.actions;
