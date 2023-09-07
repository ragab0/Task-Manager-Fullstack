"use client";
import { useGlobalContext } from "@/utils/context";
import usePostTasks from "@/utils/usePostTasks";


export default function Form() {
  const { appDispatch, appState: {formData, isWaiting, error} } = useGlobalContext();
  const postTasks = usePostTasks();

  function valueHandler(e) {
    appDispatch({
      type: "setFormValues", 
      payload: {
        id: e.target.name,
        value: e.target.value,
    }})
  }


  function submitHandler(e) {
    e.preventDefault();
    postTasks();
  }



  return (
    <form className='px-12 py-8 bg-white grid gap-4 max-w-lg mx-auto rounded-md shadow-md hover:shadow-lg'>
      <h3 className=' text-3xl mb-6 capitalize text-center'>task manager</h3>
      <label>
        <span>Name of task</span>
        <input  name="name" 
                value={formData.name} 
                onChange={valueHandler} 
                placeholder='e.g. wash dishes' />
      </label>
      <label>
        <span>More information</span>
        <textarea name="desc" 
                  value={formData.desc} 
                  onChange={valueHandler} 
                  placeholder='write more description about wash dishes' rows={4} />
      </label>
      <button onClick={submitHandler} disabled={isWaiting}>{isWaiting ? "Loading..." : "Save task"}</button>
    </form>
  )
}
