"use client";
import axios from "axios";
import { useState } from "react";


export default function Home() {
  const initialState = {
    name: "",
    desc: "",
    complete: false
  }
  const [isWaiting, setWaiting] = useState(null);
  const [formData, setFormData] = useState(initialState)

  
  function valueHandler(e) {
    const { name, value:newValue, checked } = e.target;
    setFormData(old => ({...old, [name]: newValue ?? checked}));
  }


  async function submitHandler(e) {
    e.preventDefault();
    setWaiting(true);
    try {
      const res = await axios('/api/tasks/', {
        method: 'PUT',
        body: JSON.stringify({task: formData})
      })
      
      setFormData(initialState);
      const data = await res.json();

    } catch (error) {
      console.log(error);
    }
    setWaiting(false);
  }


  return (
      <form className='px-12 py-8 bg-white grid gap-4 text-center max-w-lg mx-auto rounded-md shadow-md hover:shadow-lg'>
        <h3 className=' text-3xl mb-6 capitalize text-center'>edit task</h3>
        <p className=" text-start">Task ID: <span>11</span></p>
        <label className="flex items-center justify-start cursor-pointer">
          <span className="block mb-0 me-2">IS Completed? </span>
          <input type="checkbox" name="complete" onChange={valueHandler} className="cursor-pointer w-fit" />
        </label>
        <input  name="name" 
                value={formData.name} 
                onChange={valueHandler} 
                placeholder='e.g. wash dishes' />
        <textarea name="desc" 
                  value={formData.desc} 
                  onChange={valueHandler} 
                  placeholder='write more description about wash dishes' rows={4} />
        <button onClick={submitHandler} disabled={isWaiting}>{isWaiting ? "Loading..." : "Save changes  "}</button>
      </form>
  )
}
