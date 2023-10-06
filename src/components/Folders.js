"use client";
import { useGlobalContext } from '@/utils/context';
import { filterActions, folderActions, modalActions } from '@/utils/actions';
import { useEffect, useRef } from 'react';
import "./comps.css";


export default function Folders() {
  const backedRefChecker = useRef(null);
  const backedRef = useRef(null);
  const firstItemRef = useRef(null);
  const {
    appDispatch, 
    appState: {
      filtering: {currentDir}, 
      folder: {folders}
    }
  } = useGlobalContext();

  function folHandler(value) {
    // appDispatch(filterActions.currentDirSetter(e.target.closest("span").name))
    appDispatch(filterActions.currentDirSetter(value));
  }

  function enterHandler(e) {
    const ch = backedRefChecker.current;
    const { offsetWidth: w, offsetHeight: h, offsetLeft: l, offsetTop: t } = e.target;
    ch.style.width = w + "px";
    ch.style.height = h + "px";
    ch.style.top = t + "px";
    ch.style.left = l + "px";
    ch.style.color = "white";
    ch.style.opacity = 1;
  }

  function leaveHandler(e) {
    const ch = backedRefChecker.current;
    ch.style.opacity = 0;
    ch.style.transition = "150ms ease";
  }

  function clickHandler(e) {
    firstItemRef.current.classList.remove("active-main");
    console.log(backedRef.current.classList);
    const c = backedRef.current;
    const { offsetWidth: w, offsetHeight: h, offsetLeft: l, offsetTop: t } = e.target;
    c.style.width = w + "px";
    c.style.height = h + "px";
    c.style.top = t + "px";
    c.style.left = l + "px";
    c.style.color = "white"
    c.style.content = "lg"
  }



  useEffect(function() {
    function resizeHandler() {
      backedRef.current.click();
      console.log("clicked");
    }
    document.addEventListener("resize", resizeHandler);
    return function() {
      document.removeEventListener("resize", resizeHandler);
    }
  }, [])


  return (
    <div className='folders overflow-auto'>
      <ul className='inline-flex items-center gap-2 me-2 pb-2 relative'>
        <div ref={backedRefChecker} className='folders__backed_checker absolute top-0 left-0 rounded-md z-[-1] opacity-0 bg-slate-100 transition-all'></div>
        <div ref={backedRef} className='folders__backed animate-growing bg-mainClr absolute top-0 left-0 rounded-md z-[-1] transition-all'></div>
        {
          ["all", ...folders].map((a, i) => (
            <li key={i} draggable onClick={clickHandler} 
            ref={i===0 ? firstItemRef : null} className={`rounded-md ${i===0 ? "active-main" : ""}`}
            onMouseEnter={enterHandler} onMouseLeave={leaveHandler}
            >
              <span name={a.toLocaleLowerCase()} className={`block cursor-pointer py-3 px-9 rounded-lg capitalize`}
              onClick={() => folHandler(a)}>{a}</span>
            </li>
          )) 
        }
      </ul>
    </div>
  )
}
