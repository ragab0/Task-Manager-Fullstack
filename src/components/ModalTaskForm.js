"use client";
import { taskActions } from "@/toolkits/features/task/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "@/toolkits/features/modal/modalSlice";
import ModalHeader from "./ModalHeader";
import Select from "./Select";

export default function ModalTaskForm({ closeHandler }) {
  const appDispatch = useDispatch();
  const { isWaiting } = useSelector((state) => state.main);
  const { folders } = useSelector((state) => state.folder);
  const {
    isTaskEditted,
    taskFormData: { title, date, desc, folder },
  } = useSelector((state) => state.task);

  function valueHandler(e) {
    appDispatch(
      taskActions.taskFormDataSetter({
        name: e.target.name,
        value: e.target.value,
      })
    );
  }

  function selectOptionsHandler(val) {
    appDispatch(taskActions.taskFormDataSetter({
      name: "folder", 
      value: val,
    }));
  }

  function selectListHandler() {
    return (
      folders
      .map((f) => ({ name: f }))
      .sort((a, b) => a.name === folder ? -1 : b.name === folder ? 1 : 0)
    )
  }

  function addFolderHandler() {
    appDispatch(modalActions.modalAddFolderSetter());
  }

  function submitHandler(e) {
    e.preventDefault();
    if (isTaskEditted) {
      appDispatch(taskActions.taskEditingSubmittingSetter());
    } else {
      appDispatch(taskActions.taskSubmitSetter());
    }
    appDispatch(modalActions.modalRemoveRear());
  }


  return (
    <ModalHeader
      heading={isTaskEditted ? "Edit" : "add" + " task"}
      closeHandler={closeHandler}
    >
      {/*  onSubmit={submitHandler} alhtough e.preventDefault() called, THere is problems with form ... */}
      <div className="task-from content-start text-start capitalize">
        <label>
          <span>title</span>
          <input
            name="title"
            value={title}
            onChange={valueHandler}
            placeholder="e.g. task one"
          />
        </label>
        <label>
          <span>date</span>
          <input
            type="date"
            name="date"
            value={date}
            onChange={valueHandler}
            placeholder="e.g. today"
          />
        </label>
        <label>
          <span>description</span>
          <textarea
            name="desc"
            value={desc}
            onChange={valueHandler}
            rows={3}
            placeholder="e.g. drink tea && drink coffee"
          ></textarea>
        </label>
        <label className="pointer-events-none block !opacity-50">
          <span>select folder</span>
        </label>
        <div>
          <label htmlFor="selectFolder">select folder</label>
          <div className="flex gap-2 items-start mt-1">
            <div className="w-full">
              <Select list={selectListHandler()} dispacher={selectOptionsHandler} />
            </div>
            <button
              className="w-10 h-10 mt-2 rounded-full bg-white text-xl"
              onClick={addFolderHandler}
            >
              {"+"}
            </button>
          </div>
        </div>
        <button
          onClick={submitHandler}
          disabled={isWaiting}
          className={`btn-main w-full mb-2 mt-8 ${
            isWaiting ? "opacity-60" : ""
          }`}
        >
          {isWaiting
            ? "Loading..."
            : isTaskEditted
            ? "Save changes"
            : "Add task"}
        </button>
      </div>
    </ModalHeader>
  );
}
