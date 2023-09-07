"use client";
import axios from "axios";
import { useGlobalContext } from "./context";


export default function usePostTasks() {
  const { appDispatch, appState: {formData} } = useGlobalContext();
  
  async function postTasks() {
    appDispatch({type: "setLoading", payload: true});

    try {
      const res = await axios("http://localhost:5000/api/tasks", {
        method: "POST",
        body: {tasks: formData},
      });
      appDispatch({type: "setTasks", payload: res.data.tasks});

    } catch (error) {
      appDispatch({type: "error", payload: error});
      
    }
    appDispatch({type: "setLoading", payload: false});
    
  }
  
  return postTasks;
}