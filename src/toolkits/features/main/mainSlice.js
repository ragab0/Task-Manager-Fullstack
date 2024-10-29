const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  version: 1,
  isSettings: false,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
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
