const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  tasksList: [],
  currentTasksList: [],
  taskFormData: {
    name: null,
    date: null,
    desc: null,
    folder: null,
    id: null,
  },
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: function (state, action) {
      state.tasksList.push({ ...action.payload.taskData, id: nanoid() });
    },
    updateTask: function (state, { payload }) {
      state.tasksList = state.tasksList.map((t) =>
        t.id === payload?.updatedData.id ? payload.updatedData : t
      );
    },
    removeTask: function (state, action) {
      state.tasksList = state.tasksList.filter(
        (t) => t.id !== action.payload?.id
      );
    },
    currentTasksListSetter: function (state, action) {
      state.currentTasksList = action.payload.list;
    },
  },
});

module.exports = taskSlice.reducer;
module.exports.taskActions = taskSlice.actions;
