// 1
export const SET_IS_MODAL="SET_IS_MODAL";
// 2
export const SET_FORM_VALUES = "SET_FORM_VALUES";
export const SET_CURRENT_TYPE = "SET_CURRENT_TYPE"
export const SET_CURRENT_DIR = "SET_CURRENT_DIR"
export const SET_CURRENT_SORT = "SET_CURRENT_SORT"
export const SET_CURRENT_VIEW = "SET_CURRENT_VIEW"
export const SET_CURRENT_SEARCH = "SET_CURRENT_SEARCH"
// 3
export const SET_USER_FORM_DATA = "SET_USER_FORM_DATA"
// 4
export const SET_MAX_SLIDES = "SET_MAX_SLIDES";
export const SET_CURRENT_SLIDE = "SET_CURRENT_SLIDE";
// 5
export const SET_ADD_TASK_FORM_DATA="SET_ADD_TASK_FORM_DATA";
export const SET_ADD_TASK_SUBMIT="SET_ADD_TASK_SUBMIT";




export function isModalSetter(value) {
  return {
    type: SET_IS_MODAL,
    payload: value,
  }
}
// // Tasks Handlers
// export function tasksCurrentTaskColorSetter(value) {
//   return {
//     type: SET_TASKS_CURRENT_TASK_COLOR,
//     payload: value
//   }
// }

// export function tasksPrevTaskColorSetter(value) {
//   return {
//     type: SET_TASKS_PREV_TASK_COLOR,
//     payload: value
//   }
// }


// Form handlers
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


// 03 User handlers;
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


// 04 Slides hadnlers
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

// 05
export function addTaskFormDataSetter(name, value) {
  return {
    type: SET_ADD_TASK_FORM_DATA,
    payload: {
      name,
      value,
    }
  }
}

export function addTaskSubmitSetter() {
  return {
    type: SET_ADD_TASK_SUBMIT,
  }
}