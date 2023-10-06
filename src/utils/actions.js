// 0 appStae
export const SET_APP_VERSION="SET_APP_VERSION";
export const SET_APP_STATE="SET_APP_STATE";
export const SET_APP_IS_SETTINGS="SET_APP_IS_SETTINGS";

// 1 Modal
export const SET_IS_TASK_MODAL="SET_IS_TASK_MODAL";
export const SET_IS_ADDING_FOLDER_MODAL="SET_IS_ADDING_FOLDER_MODAL";

// 2 Filtering
export const SET_CURRENT_DATE = "SET_CURRENT_DATE"
export const SET_CURRENT_DIR = "SET_CURRENT_DIR"
export const SET_CURRENT_SORT = "SET_CURRENT_SORT"
export const SET_CURRENT_VIEW = "SET_CURRENT_VIEW"
export const SET_CURRENT_SEARCH = "SET_CURRENT_SEARCH"
// 03 User
export const SET_USER_FORM_DATA = "SET_USER_FORM_DATA"
// 04 Slides
export const SET_MAX_SLIDES = "SET_MAX_SLIDES";
export const SET_CURRENT_SLIDE = "SET_CURRENT_SLIDE";
// 05 Folder
export const SET_FOLDER_ADD_FIELD="SET_FOLDER_ADD_FIELD";
export const SET_FOLDER_ADD_SUBMIT="SET_FOLDER_ADD_SUBMIT";
// Task
export const SET_TASK_FORM_DATA="SET_TASK_FORM_DATA";
export const SET_TASK_SUBMIT="SET_TASK_SUBMIT";
export const SET_EDIT_TASK="SET_EDIT_TASK"
export const SET_EDIT_TASK_SUBMIT="SET_EDIT_TASK_SUBMIT"; 
export const SET_TASK_IS_EDITTING="SET_TASK_IS_EDITTING"
export const SET_TASK_IS_COMPLETED="SET_TASK_IS_COMPLETED";
export const SET_TASK_REMOVE="SET_TASK_REMOVE";
// Tasks
export const SET_CURRENT_TASKS_LIST="SET_CURRENT_TASKS_LIST";



// 0 appState
export function appVersionSetter() {
  return {
    type: SET_APP_VERSION,
  }
}

export function appStateSetter(state) {
  return {
    type: SET_APP_STATE,
    payload: state,
  }
}

export function appIsSettingsSetter(value) {
  return {
    type: SET_APP_IS_SETTINGS,
    payload: value,
  }
}

// 01 Modal;
class Modal {
  static isTaskModalSetter(value) {
    return {
      type: SET_IS_TASK_MODAL,
      payload: value,
    }
  }
  
  static isAddingFolderModalSetter(value) {
    return {
      type: SET_IS_ADDING_FOLDER_MODAL,
      payload: value,
    }
  }
}


// 02 Filtering
class Filter {
  static currentDateSetter(value) {
    console.log(value);
    return {
      type: SET_CURRENT_DATE,
      payload: value
    }
  }
  
  static currentDirSetter(value) {
    return {
      type: SET_CURRENT_DIR,
      payload: value
    }
  }
  
  static currentSortSetter(value) {
    return {
      type: SET_CURRENT_SORT,
      payload: value
    }
  }
  
  static currentViewSetter(value) {
    console.log(value);
    return {
      type: SET_CURRENT_VIEW,
      payload: value
    }
  }
  
  static currentSearchSetter(value) {
    return {
      type: SET_CURRENT_SEARCH,
      payload: value
    }
  }
}


// 03 User handlers;
class User {
  static userFormDataSetter(name, value) {
    console.log("# userFormDataSetter");
    return {
      type: SET_USER_FORM_DATA,
      payload: {
        name,
        value,
      }
    }
  }
}


// 04 Slide hadnlers
class Slide {
  static maxSlidesSetter(value) {
    return {
      type: SET_MAX_SLIDES,
      payload: value
    }
  }
  
  static currentSlideSetter() {
    return {
      type: SET_CURRENT_SLIDE,
    }
  }
}


// 05 Folder handlers;
class Folder {
  static folderAddFieldSetter(name) {
    return {
      type: SET_FOLDER_ADD_FIELD,
      payload: name
    }
  }
  
  static folderAddSubmitSetter() {
    return {
      type: SET_FOLDER_ADD_SUBMIT,
    }
  }
}


// Task Handlers
class Task {
  static taskFormDataSetter(name, value) {
    return {
      type: SET_TASK_FORM_DATA,
      payload: {
        name,
        value,
      }
    }
  }
  
  static taskSubmitSetter() {
    return {
      type: SET_TASK_SUBMIT,
    }
  }
  
  static taskEdittingSetter(task) {
    return {
      type: SET_EDIT_TASK,
      payload: task
    }
  }

  static taskEditingSubmittingSetter() {
    return {
      type: SET_EDIT_TASK_SUBMIT,
    }
  }
  
  static taskIsEdditingSetter(value) {
    return {
      type: SET_TASK_IS_EDITTING,
      paload: value,
    }
  }

  static taskIsCompletedSetter(id) {
    return {
      type: SET_TASK_IS_COMPLETED,
      payload: id
    }
  }
  
  static taskRemoverSetter(id) {
    return {
      type: SET_TASK_REMOVE,
      payload: id
    }
  }
}


class Tasks {
  static currentTasksListSetter(tasks) {
    return {
      type: SET_CURRENT_TASKS_LIST,
      payload: tasks
    }
  }
}


// 01 Binding Modal actions;
export const modalActions = {
  isTaskModalSetter: Modal.isTaskModalSetter,
  isAddingFolderModalSetter: Modal.isAddingFolderModalSetter,
}

// 02 Binding Filter actions;
export const filterActions = {
  currentDateSetter: Filter.currentDateSetter,
  currentDirSetter: Filter.currentDirSetter,
  currentSortSetter: Filter.currentSortSetter,
  currentViewSetter: Filter.currentViewSetter,
  currentSearchSetter: Filter.currentSearchSetter,
}

// 03 Binding User actions
export const userActions = {
  userFormDataSetter: User.userFormDataSetter,
}

// 04 Binding slide actions
export const slideActions = {
  maxSlidesSetter: Slide.maxSlidesSetter,
  currentSlideSetter: Slide.currentSlideSetter,
}

// 05 Binding folder actions
export const folderActions = {
  folderAddFieldSetter: Folder.folderAddFieldSetter,
  folderAddSubmitSetter: Folder.folderAddSubmitSetter,
}


// Binding task actions
export const taskActions = {
  taskFormDataSetter: Task.taskFormDataSetter,
  taskSubmitSetter: Task.taskSubmitSetter,
  taskEdittingSetter: Task.taskEdittingSetter,
  taskEditingSubmittingSetter: Task.taskEditingSubmittingSetter,
  taskIsEdditingSetter: Task.taskIsEdditingSetter,
  taskIsCompletedSetter: Task.taskIsCompletedSetter,
  taskRemoverSetter: Task.taskRemoverSetter,
}

export const tasksActions = {
  currentTasksListSetter: Tasks.currentTasksListSetter
}