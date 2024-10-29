const { Task } = require("./taskObject");
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  tasksList: Task.getInitialTasks(),
  currentTasksList: [],
  taskFormData: Task.getInitialTaskFormData(),
  taskSubmit: null,
  isTaskEditted: false,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    taskFormDataSetter: function (state, action) {
      // A General pattern to update any form;
      state.taskFormData[action.payload.name] = action.payload.value;
    },
    taskSubmitSetter: function (state) {
      const { title: t, desc: d, folder: f } = state.taskFormData;
      const newTask = Task.create(state.tasksList[0]?.color, t, d, f);
      state.tasksList.unshift(newTask);
      state.taskFormData = newTask;
    },
    taskEdittingSetter: function (state, action) {
      state.isTaskEditted = true;
      state.taskFormData = action.payload;
    },
    taskEditingSubmittingSetter: function (state) {
      state.tasksList = state.tasksList.map((t) =>
        t.id === state.taskFormData.id ? state.taskFormData : t
      );
      state.taskFormData = Task.getInitialTaskFormData();
    },
    taskIsEdditingSetter: function (state, action) {
      state.isTaskEditted = action.payload;
    },
    taskIsCompletedSetter: function (state, action) {
      state.tasksList = state.tasksList.map((task) => {
        if (task.id == action.payload) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });
    },
    taskRemoverSetter: function (state, action) {
      state.tasksList = state.tasksList.filter(
        ({ id }, i) => id != action.payload
      );
    },
    currentTasksListSetter: function (state, action) {
      console.log("### Dispatching currentTasksList");
      state.currentTasksList = action.payload;
    },
  },
});

module.exports = taskSlice.reducer;
module.exports.taskActions = taskSlice.actions;
