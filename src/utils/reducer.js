import { 
  SET_FORM_VALUES,
  SET_CURRENT_TYPE,
  SET_CURRENT_DIR,
  SET_CURRENT_SORT,
  SET_CURRENT_VIEW,
  SET_CURRENT_SEARCH, 
} from './actions';


const initialFormState = {
  name: "",
  desc: "",
  complte: false,
}


export const initialAppState = {
  initialFormState,
  formData: initialFormState,
  isLoading: false,
  error: null,
  tasks: [],
  currentTasks: [],

  filtering: {
    currentType: "All",
    currentDir: "main",
    currentSort: "az",
    currentView: "squares",
    currentSearch: ""
  },

}


export default function reducer(state=initialAppState, action) {
  console.log(state);
  switch (action.type) {
    /* 01 Form values */
    case SET_FORM_VALUES:
      return {
        ...state,
        formData: 
          action.payload.savedData 
          ?? 
          {
          ...state.formData,
          [action.payload.id]: action.payload.value,
        }
      }
    
    /* 02 Current data handling */
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

    /*  */
    

    default:
      return state
  }
}