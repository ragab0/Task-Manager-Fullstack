"use client";
import { viewTypes } from "@/assets/data/data";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "@/toolkits/features/filter/filterSlice";
import ReduxProvider from "../../providers/ReduxProvider";

function ViewsBody() {
  const appDispatch = useDispatch();
  const { currentView } = useSelector((state) => state.filter);

  function cllickHandler(e) {
    appDispatch(
      filterActions.currentViewSetter(e.target.closest("button").name)
    );
  }

  return (
    <div>
      <ul className="flex justify-end items-center gap-2">
        {viewTypes.map(({ Ico, name }, i) => (
          <li key={i}>
            <button name={name} className="p-2" onClick={cllickHandler}>
              <Ico
                color={`${name === currentView ? "rgb(157 0 238)" : ""}`}
                style={{ transition: "none" }}
                width={28}
                height={28}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Views() {
  return (
    <ReduxProvider>
      <ViewsBody />
    </ReduxProvider>
  );
}
