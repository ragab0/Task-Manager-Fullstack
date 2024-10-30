import FileSaver from "file-saver";
import { createSlice } from "@reduxjs/toolkit";
import { persistedStore, store } from "@/toolkits/store";

const initialState = {
  version: 1,
  isSettings: false,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    saveLocaleCopy: function (state) {
      const blob = new Blob([localStorage.getItem("persist:tod")], {
        type: "application/json",
      });
      FileSaver.saveAs(blob, `Tasks_V${String(state.version).padStart(2, 0)}`);
      state.version++;
    },
    uploadLocaleVersion: function (state, action) {
      const currentVersion = state.version;
      console.log(action.payload);
    },
    appVersionSetter: function (state) {
      state.version++;
    },
    appStateSetter: function (state, action) {
      state = action.payload;
    },
    appIsSettingsSetter: function (state, action) {
      state.isSettings = action.payload;
    },
  },
});

module.exports = mainSlice.reducer;
module.exports.mainActions = mainSlice.actions;
