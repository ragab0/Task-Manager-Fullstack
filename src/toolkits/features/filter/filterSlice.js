const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  currentDate: "today",
  currentDir: "all",
  currentSort: "newer",
  currentView: "squares",
  currentSearch: "",
  isResetting: 0,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    currentDateSetter: function (state, action) {
      state.currentDate = action.payload;
    },
    currentDirSetter: function (state, action) {
      state.currentDir = action.payload;
    },
    currentSortSetter: function (state, action) {
      state.currentSort = action.payload;
    },
    currentViewSetter: function (state, action) {
      state.currentView = action.payload;
    },
    currentSearchSetter: function (state, action) {
      state.currentSearch = action.payload;
    },
    resetFilter: function(state) {
      state.currentDate = initialState.currentDate,
      state.currentDir = initialState.currentDir,
      state.currentSort = initialState.currentSort,
      state.currentView = initialState.currentView,
      state.currentSearch = initialState.currentSearch
      state.isResetting++;
    }
  },
});

module.exports = filterSlice.reducer;
module.exports.filterActions = filterSlice.actions;