"use client";
import { useEffect } from "react";
import { useGlobalContext } from "@/utils/context";
import EmptyList from "./EmptyList";
import useFetchTasks from "@/utils/useFetchTasks";


export default function Tasks() {
  const { appState: { tasks }} = useGlobalContext();
  const fetchTasks = useFetchTasks();


  useEffect(function() {
    fetchTasks();
  }, [])


  if (!tasks.length) {
    return (
      <EmptyList />
    )
  }
  

  return (
    <div className="text-center max-w-lg mx-auto my-16">
      {
        tasks.map((task, i) => {
          const { name, id } = task;
          return (
            <article key={i} className="mb-2 p-2 bg-slate-200" id={id}>
              {id}. {name}
            </article>
          )
        })
      }
    </div>
  )
}
