const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  modalList: [],
};

function handleModalUpdate(state, name, payload = null) {
  const lastModal = state.modalList.at(-1);

  if (lastModal?.name !== name) {
    state.modalList.push({ name, payload });
  }
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModalAddFolder: (state) => {
      handleModalUpdate(state, "addFolder");
    },
    showModalAddBoard: (state) => {
      handleModalUpdate(state, "addBoard");
    },
    modalAddTempKanbanBoard: (state) => {
      handleModalUpdate(state, "addTempKanbanBoard");
    },
    modalAddTempBasicBoard: (state) => {
      handleModalUpdate(state, "addTempBasicBoard");
    },
    showModalTaskForm: (state) => {
      handleModalUpdate(state, "taskForm");
    },
    showModalTaskFormUpdate: (state, action) => {
      handleModalUpdate(state, "taskFormUpdate", action.payload);
    },
    modalRemoveRear: (state) => {
      state.modalList.pop();
    },
  },
});

module.exports = modalSlice.reducer;
module.exports.modalActions = modalSlice.actions;
