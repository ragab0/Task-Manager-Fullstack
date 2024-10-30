const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  modalList: [],
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalAddFolderSetter: function (state) {
      if (state.modalList.at(-1) !== "addFolder") {
        state.modalList.push("addFolder");
      }
    },
    modalAddBoardSetter: function (state) {
      if (state.modalList.at(-1) !== "addBoard") {
        state.modalList.push("addBoard");
      }
    },
    modalTaskFormSetter: function (state) {
      if (state.modalList.at(-1) !== "taskForm") {
        state.modalList.push("taskForm");
      }
    },
    modalRemoveRear: function (state) {
      state.modalList.pop();
    },
  },
});

module.exports = modalSlice.reducer;
module.exports.modalActions = modalSlice.actions;
