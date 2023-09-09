"use client";
import { useGlobalContext } from "@/utils/context";
import { addTaskFormDataSetter, addTaskSubmitSetter, isModalSetter } from "@/utils/actions";
import Modal from "./Modal";
import Select from "./Select";
import "./comps.css";

export default function AddTask() {
  const { appDispatch, appState: {isWaiting, addTask: {addTaskFormData: {title, date, desc, folder}}} } = useGlobalContext();
  function valueHandler(e) {
    appDispatch(addTaskFormDataSetter(e.target.name, e.target.value));
  }

  function submitHandler(e) {
    e.preventDefault();
    appDispatch(addTaskSubmitSetter());
    appDispatch(isModalSetter(false));
  }


  return (
    <Modal heading={"add task"}>
      <form className='task-from content-start text-start capitalize'>
        <label>
          <span>title</span>
          <input name="title" value={title} onChange={valueHandler} placeholder='e.g. task one' />
        </label>
        <label>
          <span>date</span>
          <input name="date" value={date} onChange={valueHandler} placeholder='e.g. today' />
        </label>
        <label>
          <span>desc - separating with "&&"</span>
          <textarea name="desc" value={desc} onChange={valueHandler} rows={3} placeholder='e.g. drink tea && drink coffee'></textarea>
        </label>
        {/* <label>
          <span>select folder</span>
          <input name="folder" value={folder} />
        </label> */}
        {/* <Select list={[{name: "all"}, {name: "all"}]} /> */}
        <button onClick={submitHandler} disabled={isWaiting} className={`btn-main w-full mb-2 mt-4 ${isWaiting ? "opacity-60" : ""}`}>{isWaiting ? "Loading..." : "save"}</button>
      </form>
    </Modal>
  )
}
