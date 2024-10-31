"use client";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "@/toolkits/features/filter/filterSlice";
import ReduxProvider from "../../providers/ReduxProvider";

function FoldersBody() {
  const appDispatch = useDispatch();
  const { isResetting } = useSelector((state) => state.filter);

  const backedRefChecker = useRef(null);
  const backedRef = useRef(null);
  const firstItemRef = useRef(null);
  const { folders } = useSelector((state) => state.folder);
  const { currentDir } = useSelector((state) => state.filter);

  function folHandler(value) {
    // appDispatch(filterActions.currentDirSetter(e.target.closest("span").name))
    appDispatch(filterActions.currentDirSetter(value));
  }

  function enterHandler(e) {
    const ch = backedRefChecker.current;
    const { offsetWidth: w, offsetHeight: h, offsetLeft: l } = e.target;
    ch.style.width = w + "px";
    ch.style.height = h + "px";
    ch.style.left = l + "px";
    ch.style.opacity = 1;
  }

  function leaveHandler(e) {
    const ch = backedRefChecker.current;
    ch.style.opacity = 0;
    ch.style.transition = "150ms ease";
  }

  function clickHandler(e) {
    firstItemRef.current.classList.remove("active-main");
    const c = backedRef.current;
    const { offsetWidth: w, offsetHeight: h, offsetLeft: l } = e.target;
    c.style.opacity = 1;
    c.style.width = w + "px";
    c.style.height = h + "px";
    c.style.left = l + "px";
  }

  useEffect(
    function () {
      const c = backedRef.current;
      c.style.left = 0;
      c.style.width = firstItemRef.current.offsetWidth + "px";
      c.style.height = firstItemRef.current.offsetHeight + "px";
    },
    [isResetting]
  );

  return (
    <div className="folders overflow-auto">
      <ul className="inline-flex items-center gap-2 me-2 pb-2 relative">
        <div
          ref={backedRefChecker}
          className="folders__backed_checker absolute top-0 left-0 rounded-md z-[-1] opacity-0 bg-slate-100 transition-all"
        ></div>
        <div
          ref={backedRef}
          className="folders__backed animate-growing bg-mainClr absolute top-0 left-0 rounded-md z-[-1] transition-all"
        ></div>
        {[...folders].map((a, i) => (
          <li
            key={i}
            // draggable
            onClick={clickHandler}
            ref={i === 0 ? firstItemRef : null}
            className={`rounded-md ${i === 0 ? "active-main" : ""}`}
            onMouseEnter={enterHandler}
            onMouseLeave={leaveHandler}
          >
            <span
              name={a.toLocaleLowerCase()}
              className={`block cursor-pointer py-3 px-9 rounded-lg capitalize`}
              onClick={() => folHandler(a)}
            >
              {a}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Folders() {
  return (
    <ReduxProvider>
      <FoldersBody />
    </ReduxProvider>
  );
}
