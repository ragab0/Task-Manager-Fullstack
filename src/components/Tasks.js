"use client";
import { useEffect } from "react";
import { useGlobalContext } from "@/utils/context";
import EmptyList from "./EmptyList";
import useFetchTasks from "@/utils/useFetchTasks";
import { tasks } from "@/assets/data/data";


export default function Tasks() {
  // const { appState: { tasks }} = useGlobalContext();
  // const fetchTasks = useFetchTasks();


  // useEffect(function() {
  //   fetchTasks();
  // }, [])


  // if (!tasks.length) {
  //   return (
  //     <EmptyList />
  //   )
  // }
  
  
  return (
    <div className="text-center max-w-lg mx-auto my-16">
      {
        tasks.map(({title, id, desc, isCompleted}, i) => {
          return (
            <article key={i} className="mb-2 p-2 bg-slate-200" id={id}>
              {id}. {title}
            </article>
          )
        })
      }
    </div>
  )
}
