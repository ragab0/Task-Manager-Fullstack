"use client";
import axios from "axios";
import { useGlobalContext } from "./context";


export default function useFetchTasks() {
  const { appDispatch } = useGlobalContext();
  
  async function fetchTasks() {
    appDispatch({type: "setLoading", payload: true});

    try {
      const res = await axios("http://localhost:5000/api/tasks");
      appDispatch({type: "setTasks", payload: res.data.tasks});
  
    } catch (error) {
      appDispatch({type: "error", payload: error});

    }
    appDispatch({type: "setLoading", payload: false});

  }

  return fetchTasks;
}