import { createContext, useContext, useReducer } from "react";
import initialAppState from "./initialState";
import reducer from "./reducer";

const AppContext = createContext();



export default function AppProvider({children}) {
  const [ appState, appDispatch ] = useReducer(reducer, initialAppState)
  return(
    <AppContext.Provider value={{appState, appDispatch }}>
      {children}
    </AppContext.Provider>
  )
}



function useGlobalContext() {
  return useContext(AppContext);
}

export { AppProvider, useGlobalContext }