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
} from './actions';

const initialFormState = {
  name: "",
  desc: "",
  complte: false,
}

const initialUserFormData = {
  name: "Legend",
  bio: "fron-end developer",
  email: "legend@lg.com"
}



export const initialAppState = {
  initialFormState,
  formData: initialFormState,
  isLoading: false,
  error: null,
  tasks: [],
  currentTasks: [],

  filtering: {
    currentType: "all",
    currentDir: "all",
    currentSort: "az",
    currentView: "squares",
    currentSearch: ""
  },

  user: {
    isSettings: true,
    initialUserFormData,
    userFormData: initialUserFormData,
  },

  slides: {
    currentSlide: 0,
    maxSlides: null,
  }

}


export default function reducer(state=initialAppState, action) {
  console.log(state);
  switch (action.type) {
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
    
    default:
      return state
  }
}