"use client";
import { useGlobalContext } from "@/utils/context";
import { userFormDataSetter } from "@/utils/actions";
import { accountFields } from "@/assets/data/data";
import Image from "next/image";
import { imgs } from "@/assets/imgs";


export default function SliceUserForm({nextHandler}) {
  
  const { appState: {user: {userFormData}}, appDispatch } = useGlobalContext();
  function valueHandler(e) {
    appDispatch(userFormDataSetter(e.target.name, e.target.value));
  }


  return (
    <div>
      <button className="btn-img w-12 h-12 mx-auto block hover:bg-slate-200">
        <Image alt="back" src={imgs.x} onClick={nextHandler} />
      </button>
      <div className="my-8 border-2 w-1/3 mx-auto border-slate-200 rounded-full"></div>
      <form className=" capitalize">
        {
          accountFields.map(({name: n, t}, i) => (
            <label key={i} className="mb-3 block">
              <span className="text-sm mb-1 block">{n}</span> 
              <input type={t} name={n} className="p-2 bg-white w-full text-sm" value={userFormData[n]} onChange={valueHandler} />
            </label>
          ))
        }
      </form>
      <div className="my-8 border-2 w-1/3 mx-auto border-slate-200 rounded-full"></div>
      <button className="underline py-2 block mx-auto text-green-500">Copy data locally</button>
      <button className='underline py-2 block mx-auto text-red-400'>Remove Tasks !!</button>
    </div>
  )
}
