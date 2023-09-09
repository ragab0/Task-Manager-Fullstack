import { 
  SET_FORM_VALUES,
  SET_CURRENT_TYPE,
  SET_CURRENT_DIR,
  SET_CURRENT_SORT,
  SET_CURRENT_VIEW,
  SET_CURRENT_SEARCH, 
  SET_USER_FORM_DATA,
  SET_MAX_SLIDES,
  SET_CURRENT_SLIDE,
  SET_IS_MODAL,
  SET_ADD_TASK_FORM_DATA,
  SET_ADD_TASK_SUBMIT
} from './actions';

import initialState, { Task } from './initialState';


// To show the state formatting;
export default function reducer(state=initialState, action) {
  console.log(state);
  switch (action.type) {
    case SET_IS_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          isModal: action.payload,
        }
      }

    case SET_FORM_VALUES:
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.id]: action.payload.value,
        }
      }
    
    case SET_CURRENT_TYPE:
      return {
        ...state,
        filtering: {
          ...state.filtering,
          currentType: action.payload
        }
      }
    
    case SET_CURRENT_DIR:
      return {
        ...state,
        filtering: {
          ...state.filtering,
          currentDir: action.payload
        }
    }    
    
    case SET_CURRENT_SORT:
      return {
        ...state,
        filtering: {
          ...state.filtering,
          currentSort: action.payload
        }
    }    
    
    case SET_CURRENT_VIEW:
      return {
        ...state,
        filtering: {
          ...state.filtering,
          currentView: action.payload
        }
    }    
    
    case SET_CURRENT_SEARCH:
      return {
        ...state,
        filtering: {
          ...state.filtering,
          currentSearch: action.payload
        }
    }

    case SET_USER_FORM_DATA:
      console.log(1);    
      return {
        ...state,
        user: {
          ...state.user,
          userFormData: {
            ...state.user.userFormData,
            [action.payload.name]: action.payload.value,
          }
        }
      }

    
    case SET_MAX_SLIDES:
      console.log(action.payload, "###");
      return {
        ...state,
        slides: {
          ...state.slides,
          maxSlides: action.payload
        }
      }

    case SET_CURRENT_SLIDE:
      console.log(state.slides.maxSlides);
      console.log(state.slides.currentSlide);
      return {
        ...state,
        slides: {
          ...state.slides,
          currentSlide: state.slides.currentSlide+1 < state.slides.maxSlides ? state.slides.currentSlide + 1 : 0
        }
      }
    
    case SET_ADD_TASK_FORM_DATA:
      return {
        ...state,
        addTask: {
          ...state.addTask,
          addTaskFormData: {
            ...state.addTask.addTaskFormData,
            [action.payload.name]: action.payload.value,
          }
        }
      }

    case SET_ADD_TASK_SUBMIT:
      const { title, desc, date, priorety, folder } = state.addTask.addTaskFormData;
      const newTask = Task.createTask(title, desc, date, priorety, folder);
      return {
        ...state,
        tasksGroup: {
          ...state.tasksGroup,
          tasks: [newTask, ...state.tasksGroup.tasks],
        },
        addTask: {
          ...state.addTask,
          addTaskFormData: Task.getInitialAddTaskFormData(),
        }
      }

    default:
      return state
  }
}