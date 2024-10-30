const { toast } = require("react-toastify");
const { User } = require("./userObject");
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  userFormData: {
    name: "",
    bio: "",
    photo: "",
  },
  isSettings: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userFormDataSetter: function (state, action) {
      state.userFormData = action.payload;
    },
  },
});

module.exports = userSlice.reducer;
module.exports.userActions = userSlice.actions;
