import initialState, { Task } from './initialState';
import { 
  SET_APP_VERSION,
  SET_APP_STATE,
  SET_APP_IS_SETTINGS,

  SET_IS_TASK_MODAL,
  SET_IS_ADDING_FOLDER_MODAL,

  SET_CURRENT_DATE,
  SET_CURRENT_DIR,
  SET_CURRENT_SORT,
  SET_CURRENT_VIEW,
  SET_CURRENT_SEARCH, 

  SET_MAX_SLIDES,
  SET_CURRENT_SLIDE,

  SET_USER_FORM_DATA,
  
  SET_FOLDER_ADD_FIELD,
  SET_FOLDER_ADD_SUBMIT,
  
  SET_TASK_FORM_DATA,
  SET_TASK_SUBMIT,
  SET_EDIT_TASK,
  SET_EDIT_TASK_SUBMIT,
  SET_TASK_IS_EDITTING,
  SET_TASK_IS_COMPLETED,
  SET_TASK_REMOVE,
  SET_CURRENT_TASKS_LIST,

} from './actions';


function filteringTasks(state, identfire, newValue) {
  let newTasks = state.tasks.tasksList.filter(task => {
    let { currentSearch, currentSort, currentType, currentDir,  } = state.filtering;
    let { date, isCompleted, title, folder } = task;
    return (
      title.contains(currentSearch)
    )
  })
  return newTasks;
}


export default function reducer(state=initialState, action) {
  console.log(state);
  switch (action.type) {

    // 00
    case SET_APP_VERSION:
      return {
        ...state,
        version: state.version +1,
      }
      
    case SET_APP_STATE:
      return action.payload

    case SET_APP_IS_SETTINGS:
      return {
        ...state,
        isSettings: action.payload,
      }

    // 01
    case SET_IS_TASK_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          "isTaskModal": action.payload,
        },
        task: {
          ...state.task,
        }
      }

    case SET_IS_ADDING_FOLDER_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          "isAddingFolder": action.payload,
        }
      }



    // 02 Filter Handlers
    case SET_CURRENT_SEARCH:
      return {
        ...state,
        filtering: {
          ...state.filtering,
          currentSearch: action.payload
        },
        tasks: {
          ...state.tasks,
        }
    }

    case SET_CURRENT_DATE:
      return {
        ...state,
        filtering: {
          ...state.filtering,
          currentDate: action.payload
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



    // 03 User handlers
    case SET_USER_FORM_DATA:
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



    // 04 Slides handlers
    case SET_MAX_SLIDES:
      return {
        ...state,
        slides: {
          ...state.slides,
          maxSlides: action.payload
        }
      }

    case SET_CURRENT_SLIDE:
      return {
        ...state,
        slides: {
          ...state.slides,
          currentSlide: state.slides.currentSlide+1 < state.slides.maxSlides ? state.slides.currentSlide + 1 : 0
        }
      }
    


    // 05 Folder hadnlers
    case SET_FOLDER_ADD_FIELD:
      return {
        ...state,
        folder: {
          ...state.folder,
          addFolderField: action.payload,
        }
      }
      case SET_FOLDER_ADD_SUBMIT:
        const newFolder = String(state.folder.addFolderField).toLocaleLowerCase();
        const newFolders = (newFolder !== "all" && newFolder !== "" && !state.folder.folders.includes(newFolder)) 
        ? [...new Set([...state.folder.folders, state.folder.addFolderField.toLocaleLowerCase()])]
        : state.folder.folders

        return {
          ...state,
          modal: {
            ...state.modal,
            isAddingFolder: false,
          },
          folder: {
            ...state.folder,
            folders: newFolders,
            addFolderField: ""
          }
        }

        

    // Task handlers
    case SET_TASK_FORM_DATA:
      return {
        ...state,
        task: {
          ...state.task,
          taskFormData: {
            ...state.task.taskFormData,
            [action.payload.name]: action.payload.value,
          }
        }
      }

    case SET_TASK_SUBMIT:
      const { title, desc, folder } = state.task.taskFormData;
      const newTask = Task.createTask(state.tasks.tasksList[0]?.color, title, desc, folder);
      
      return {
        ...state,
        tasks: {
          ...state.tasks,
          tasksList: [newTask, ...state.tasks.tasksList],
        },
        task: {
          ...state.task,
          taskFormData: newTask,
        }
      }

    case SET_EDIT_TASK:
      return {
        ...state,
        modal: {
          ...state.modal,
          isTaskModal: true
        },
        task: {
          ...state.task,
          isTaskEditted: true,
          taskFormData: action.payload
        },
      }

    case SET_EDIT_TASK_SUBMIT:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          tasksList: state.tasks.tasksList.map(t => t.id === state.task.taskFormData.id ? state.task.taskFormData : t)
        },
        task: {
          ...state.task,
          taskFormData: Task.getInitialTaskFormData(),
        }
      }

    case SET_TASK_IS_EDITTING:
      return {
        ...state,
        task: {
          ...state.task,
          isTaskEditted: action.payload,
        }
      }
    case SET_TASK_IS_COMPLETED:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          tasksList: state.tasks.tasksList.map((task, i) => {
            if (task.id == action.payload) {
              task.isCompleted = !task.isCompleted;
            }
            return task;
          }),
        }
      }

    case SET_TASK_REMOVE:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          tasksList: state.tasks.tasksList.filter(({id}, i) => id != action.payload),
        }
      }


    
    case SET_CURRENT_TASKS_LIST:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          currentTasksList: action.payload
        }
      }

    default:
      return state
  }
}