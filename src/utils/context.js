import { createContext, useContext, useEffect, useReducer } from "react";
import { appStateSetter, filterActions } from "./actions";
import initialAppState from "./initialState";
import reducer from "./reducer";

const AppContext = createContext();


export default function AppProvider({children}) {
  const [ appState, appDispatch ] = useReducer(reducer, initialAppState);

  useEffect(function() {
    const savedAppState = localStorage.getItem("todoListappState") ?? null;
    savedAppState && appDispatch(appStateSetter(JSON.parse(savedAppState)));
    savedAppState && appDispatch(filterActions.currentDirSetter("all"));
    console.log("get done and is", JSON.parse(savedAppState));
  }, [])

  useEffect(function() {
    localStorage.setItem("todoListappState", JSON.stringify(appState))
    console.log("state saved", appState);
  }, [appState])


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