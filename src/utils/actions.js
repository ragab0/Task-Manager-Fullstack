export const SET_FORM_VALUES = "SET_FORM_VALUES";
export const SET_CURRENT_TYPE = "SET_CURRENT_TYPE"
export const SET_CURRENT_DIR = "SET_CURRENT_DIR"
export const SET_CURRENT_SORT = "SET_CURRENT_SORT"
export const SET_CURRENT_VIEW = "SET_CURRENT_VIEW"
export const SET_CURRENT_SEARCH = "SET_CURRENT_SEARCH"

// 2
export const SET_USER_FORM_DATA = "SET_USER_FORM_DATA"

// 3
export const SET_MAX_SLIDES = "SET_MAX_SLIDES";
export const SET_CURRENT_SLIDE = "SET_CURRENT_SLIDE";



export function formValuesSetter(value) {
  return {
    type: SET_FORM_VALUES,
    payload: value
  }
}

export function currentTypeSetter(value) {
  console.log(value);
  return {
    type: SET_CURRENT_TYPE,
    payload: value
  }
}

export function currentDirSetter(value) {
  return {
    type: SET_CURRENT_DIR,
    payload: value
  }
}

export function currentSortSetter(value) {
  return {
    type: SET_CURRENT_SORT,
    payload: value
  }
}

export function currentViewSetter(value) {
  console.log(value);
  return {
    type: SET_CURRENT_VIEW,
    payload: value
  }
}

export function currentSearchSetter(value) {
  return {
    type: SET_CURRENT_SEARCH,
    payload: value
  }
}



// 02 User handlers;
export function userFormDataSetter(name, value) {
  console.log("# userFormDataSetter");
  return {
    type: SET_USER_FORM_DATA,
    payload: {
      name,
      value,
    }
  }
}



// 03 Slides hadnlers
export function maxSlidesSetter(value) {
  return {
    type: SET_MAX_SLIDES,
    payload: value
  }
}

export function currentSlideSetter() {
  return {
    type: SET_CURRENT_SLIDE,
  }
}