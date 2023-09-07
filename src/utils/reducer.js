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
  tasks: []
}


export default function reducer(state=initialAppState, action) {
  console.log(state);
  switch (action.type) {
    case "setFormValues":
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
  

    // Fetching and Posting task + their methods;
    case "setTasks":
      return {
        ...state,
        tasks: action.payload
      }
    case "setLoading":
      return {
        ...state,
        isLoading: action.payload
      }
    case "setFailed": 
      return {
        ...state,
        error: action.payload
    }

    default:
      return state
  }
}