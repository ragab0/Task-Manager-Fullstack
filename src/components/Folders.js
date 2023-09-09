"use client";
import { useGlobalContext } from '@/utils/context';
import { currentDirSetter } from '@/utils/actions';
import "./comps.css";
import { useEffect, useRef } from 'react';


export default function Folders() {
  const {appDispatch, appState: {filtering: {currentDir}}} = useGlobalContext();
  const backedRefChecker = useRef(null);
  const backedRef = useRef(null);
  const firstItemRef = useRef(null);

  function folHandler(e) {
    appDispatch(currentDirSetter(e.target.closest("span").name))
  }

  function enterHandler(e) {
    const ch = backedRefChecker.current;
    const { offsetWidth: w, offsetHeight: h, offsetLeft: l } = e.target;
    ch.style.width = w + "px";
    ch.style.height = h + "px";
    ch.style.left = l + "px";
    ch.style.color = "white";
    ch.style.opacity = 1;
  }

  function leaveHandler(e) {
    const ch = backedRefChecker.current;
    ch.style.opacity = 0;
    ch.style.transition = "100ms ease";
  }

  function clickHandler(e) {
    firstItemRef.current.classList.remove("active-main");
    console.log(backedRef.current.classList);
    const c = backedRef.current;
    const { offsetWidth: w, offsetHeight: h, offsetLeft: l } = e.target;
    c.style.width = w + "px";
    c.style.height = h + "px";
    c.style.left = l + "px";
    c.style.color = "white"
    c.style.content = "lg"
  }


  return (
    <div className='folders'>
      <ul className='inline-flex flex-wrap gap-2 me-2 relative'>
        <div ref={backedRefChecker} className='folders__backed_checker absolute top-0 left-0 rounded-md z-[-1] opacity-0 bg-slate-100 transition-all'></div>
        <div ref={backedRef} className='folders__backed animate-growing bg-mainClr absolute top-0 left-0 rounded-md z-[-1] transition-all'></div>
        {
          ["all", "projects", "main", "secondery"].map((a, i) => (
            <li key={i} draggable onClick={clickHandler} 
            ref={i===0 ? firstItemRef : null} className={`rounded-md ${i===0 ? "active-main" : ""}`}
            onMouseEnter={enterHandler} onMouseLeave={leaveHandler}
            >
              <span name={a.toLocaleLowerCase()} className={`block cursor-pointer py-3 px-9 rounded-lg capitalize`}
              onClick={folHandler}>{a}</span>
            </li>
          )) 
        }
      </ul>
      <button className='w-10 h-10 rounded-full bg-slate-100 text-xl'>{"+"}</button>
    </div>
  )
}
