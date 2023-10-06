"use client";
import { useGlobalContext } from "@/utils/context";
import { taskActions, modalActions } from "@/utils/actions";
import Modal from "./Modal";
import Select from "./Select";
import "./comps.css";

export default function ModalTaskForm() {
  const { appDispatch,
    appState: {
      isWaiting, 
      folder: {folders},
      task: {taskFormData: {title, date, desc}, isTaskEditted}} 
    } = useGlobalContext();

  function valueHandler(e) {
    appDispatch(taskActions.taskFormDataSetter(e.target.name, e.target.value));
  }

  function modalCloser() {
    appDispatch(modalActions.isTaskModalSetter(false));
    appDispatch(taskActions.taskIsEdditingSetter(false));
  }

  function submitHandler(e) {
    e.preventDefault();
    if (isTaskEditted) {
      appDispatch(taskActions.taskEditingSubmittingSetter());
    } else {
      appDispatch(taskActions.taskSubmitSetter());
    }
    modalCloser();
  }

  function addFolderHandler(value) {
    appDispatch(modalActions.isAddingFolderModalSetter(value));
  }

  return (
    <Modal heading={isTaskEditted ? "Edit" : "add" + " task"} closer={modalCloser}>
      {/*  onSubmit={submitHandler} alhtough e.preventDefault() called, THere is problems with form ... */}
      <div className='task-from content-start text-start capitalize'>
        <label>
          <span>title</span>
          <input name="title" value={title} onChange={valueHandler} placeholder='e.g. task one' />
        </label>
        <label>
          <span>date</span>
          <input type="date" name="date" value={date} onChange={valueHandler} placeholder='e.g. today' />
        </label>
        <label>
          <span>description</span>
          <textarea name="desc" value={desc} onChange={valueHandler} rows={3} placeholder='e.g. drink tea && drink coffee'></textarea>
        </label>
        <label className="pointer-events-none block !opacity-50">
          <span>select folder</span>
        </label>
        <div>
          <label htmlFor="selectFolder">select folder</label>
          <div className="flex gap-2 items-start mt-1">
            <div className="w-full">
              <Select list={folders.map(f => ({name: f}))} />
            </div>
            <button className='w-10 h-10 mt-2 rounded-full bg-white text-xl' 
              onClick={() => addFolderHandler(true)}>{"+"}
            </button>
          </div>
        </div>
        <button onClick={submitHandler} disabled={isWaiting} className={`btn-main w-full mb-2 mt-8 ${isWaiting ? "opacity-60" : ""}`}>
          {isWaiting ? "Loading..." : isTaskEditted ? "Save changes" : "Add task"}
        </button>
      </div>
    </Modal>
  )
}
