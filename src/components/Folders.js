"use client";
import { useGlobalContext } from '@/utils/context';
import { currentDirSetter } from '@/utils/actions';


export default function Folders() {
  const {appDispatch, appState: {filtering: {currentDir}}} = useGlobalContext();
  function folHandler(e) {
    appDispatch(currentDirSetter(e.target.closest("button").name))
  }

  return (
    <div>
      <ul className='inline-flex flex-wrap gap-2 me-2'>
        {
          ["all", "projects"].map((a, i) => (
            <li key={i} >
              <button name={a.toLocaleLowerCase()} className={`border-slate-300 border-2 py-3 px-9 rounded-lg capitalize ${a === currentDir ? "text-white bg-mainClr border-mainClrLight" : ""}`}
              onClick={folHandler}>{a}</button>
            </li>
          )) 
        }
      </ul>
      <button className='w-10 h-10 rounded-full bg-slate-100 text-xl'>{"+"}</button>
    </div>
  )
}
