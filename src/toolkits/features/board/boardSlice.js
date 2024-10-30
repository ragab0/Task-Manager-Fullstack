const { toast } = require("react-toastify");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  boards: [],
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addBoard: function (state, action) {
      // it is just add - doesn't do any validation/checking
      // we'll check on the submitHandler as we'll use sideeffect (toastify);
      state.boards.push(action.payload.formData);
    },
    removeBoard: function (state, action) {
      state.boards = state.boards.filter(
        (b) => b.title !== action.payload.title
      );
    },
  },
});

module.exports = boardSlice.reducer;
module.exports.boardActions = boardSlice.actions;
