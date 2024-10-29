const { User } = require("./userObject");
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  userFormData: User.getInitialUserFormData(),
  isSettings: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userFormDataSetter: function (state, action) {
      state.version++;
      state.userFormData[action.payload.name] = action.payload.value;
    },
  },
});

module.exports = userSlice.reducer;
module.exports.userActions = userSlice.actions;
