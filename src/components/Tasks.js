"use client";
import { useGlobalContext } from "@/utils/context";
import EmptyList from "./EmptyList";
import { useEffect, useState } from "react";
import { taskColors } from "@/assets/data/data";
import { isModalSetter } from "@/utils/actions";
import AddTask from "./AddTask";
import { marked } from "marked";

export default function Tasks() {

  const { appState: {tasksGroup: {tasks}}} = useGlobalContext();
  const { appDispatch, appState: {modal: {isModal}}} = useGlobalContext();

  function addHandler() {
    appDispatch(isModalSetter(true));
  }

  function mdParseer(mdTexter) {
    return { __html: marked(mdTexter) };
  };

  function dragEndHandler(e) {

  }


  return (
    <div className="tasks grid grid-cols-4 gap-5 my-10  ">
      {
        tasks.map(({title, id, desc, date, priorety}, i) => {
          
          return (
            <article key={i} id={id} className="p-5 w-full min-h-[250px] rounded-md shadow-md hover:shadow-lg" 
            style={{backgroundColor: taskColors[i % taskColors.length]}} 
            // onDragStart={dragStartHandler} onDragEnter={dragEnterHandler}
            draggable onDragEnd={dragEndHandler}>
              <div className="flex justify-between items-center mb-5">
                <h4>{title}</h4>
                <span>{date}</span>
              </div>
              <div dangerouslySetInnerHTML={mdParseer(desc)} className=" !text-start"></div>
              {/* <ol type="A">
                {
                  desc.split("&&").map((b,j) => (
                    <li key={j}>{b}</li>
                  ))
                }
              </ol> */}
            </article>
          )
        })
      }
      <button onClick={addHandler} className="flex justify-center items-center bg-slate-100 rounded-md shadow-md hover:bg-opacity-5">
        <p className=" text-5xl">{"+"}</p>
      </button>
      {isModal && <AddTask />}
    </div>
  )
}
