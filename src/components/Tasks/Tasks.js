"use client";
import ReduxProvider from "../../providers/ReduxProvider";
import Image from "next/image";
import { marked } from "marked";
import { imgs } from "@/assets/imgs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { taskActions } from "@/toolkits/features/task/taskSlice";
import { modalActions } from "@/toolkits/features/modal/modalSlice";
import { getPeriodByName } from "@/utils/date";
import { getSortingVersion } from "@/utils/sort";
import { toast } from "react-toastify";

function TasksBody() {
  const appDispatch = useDispatch();
  const filterState = useSelector((state) => state.filter);
  const { tasksList, currentTasksList } = useSelector((state) => state.task);
  const { currentView, currentSearch, currentDate, currentDir, currentSort } =
    filterState;

  function addHandler() {
    appDispatch(modalActions.showModalTaskForm());
  }

  function removeHandler(id) {
    appDispatch(taskActions.removeTask({ id }));
    toast.warning("Task has been deleted!");
  }

  function editTaskHandler(task) {
    appDispatch(modalActions.showModalTaskFormUpdate({ task }));
  }

  function mdParseer(mdTexter) {
    return { __html: marked(mdTexter) };
  }

  useEffect(
    function () {
      const filteredPayload = tasksList.filter((task) => {
        let cDateVal = String(currentDate).toLocaleLowerCase(),
          cSearch = String(currentSearch).toLocaleLowerCase(),
          cDir = String(currentDir).toLocaleLowerCase();
        let taskFolder = String(task.folder).toLocaleLowerCase(),
          taskTitle = String(task.title).toLocaleLowerCase(),
          taskDate = new Date(Date.parse(task.fullDate));
        return (
          (cDateVal === "all" || taskDate >= getPeriodByName(cDateVal)) &&
          taskTitle.includes(cSearch) &&
          (cDir === "all" || cDir === taskFolder)
        );
      });
      const sortedPayload = getSortingVersion(filteredPayload, currentSort);
      appDispatch(taskActions.currentTasksListSetter({ list: sortedPayload }));
    },
    [filterState, tasksList]
  );

  // xl:grid-cols-3 lg:grid-cols-2
  return (
    <div className={`tasks flex flex-wrap gap-5 my-10`}>
      {currentTasksList.map((task, i) => {
        const { title, name, id, desc, date, color: clr } = task;
        return (
          <article
            key={i}
            id={id}
            className={` ${
              currentView === "squares"
                ? "w-full lg:w-[calc(50%-10px)] xl:w-[calc(33.3333%-13.3333px)] 2xl:w-[calc(25%-15px)] "
                : "w-full"
            }
              overflow-hidden grid grid-rows-[1fr_auto] p-5 pb-3 min-h-[250px] rounded-md shadow-md hover:shadow-lg`}
            style={{ backgroundColor: clr || "transparent" }}
          >
            <div>
              <div className="grid grid-cols-[1fr_auto] gap-4 mb-5">
                <h4 className=" overflow-hidden break-all capitalize">
                  {name || title || "UnNamed"}
                </h4>
                <span>{date}</span>
              </div>
              <div
                dangerouslySetInnerHTML={mdParseer(desc)}
                className="!text-start mb-4"
              ></div>
            </div>
            <div className="flex justify-between gap-4 items-center">
              <div className="inline-flex flex-row-reverse gap-2 text-sm">
                <button onClick={() => editTaskHandler(task)}>
                  <Image
                    alt="settings"
                    src={imgs.edit}
                    className="opacity-80"
                  />
                </button>
                <button onClick={() => removeHandler(id)}>
                  <Image
                    alt="settings"
                    src={imgs.trash}
                    className="opacity-80"
                  />
                </button>
              </div>
            </div>
          </article>
        );
      })}
      <button
        onClick={addHandler}
        className="flex-1 flex justify-center items-center bg-slate-100 rounded-md shadow-md hover:bg-opacity-5"
      >
        <p className=" text-5xl">{"+"}</p>
      </button>
    </div>
  );
}

export default function Tasks() {
  return (
    <ReduxProvider>
      <TasksBody />
    </ReduxProvider>
  );
}
