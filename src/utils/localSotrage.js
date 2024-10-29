const [appState, appDispatch] = useReducer(reducer, initialAppState);

useEffect(function () {
  const savedAppState = localStorage.getItem("todoListappState") ?? null;
  savedAppState && appDispatch(appStateSetter(JSON.parse(savedAppState)));
  savedAppState && appDispatch(filterActions.currentDirSetter("all"));
  console.log("get done and is", JSON.parse(savedAppState));
}, []);

useEffect(
  function () {
    localStorage.setItem("todoListappState", JSON.stringify(appState));
    console.log("state saved", appState);
  },
  [appState]
);
