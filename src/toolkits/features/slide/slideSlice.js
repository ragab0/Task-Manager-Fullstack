const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  currentSlide: 0,
  maxSlides: null,
};

const slideSlice = createSlice({
  name: "slide",
  initialState,
  reducers: {
    maxSlidesSetter: function (state, action) {
      state.maxSlides = action.payload;
    },
    currentSlideSetter: function (state) {
      state.currentSlide =
        state.currentSlide + 1 < state.maxSlides ? state.currentSlide + 1 : 0;
    },
  },
});

module.exports = slideSlice.reducer;
module.exports.slideActions = slideSlice.actions;
