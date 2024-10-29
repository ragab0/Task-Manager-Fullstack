"use client";
import { selectTimeFilter, selectSortFilter } from "@/assets/data/data";
import { imgs } from "@/assets/imgs";
import { filterActions } from "@/toolkits/features/filter/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import ReduxProvider from "../../providers/ReduxProvider";
import Login from "../Login/Login";
import Select from "../Select/Select";

function SliceFilterBody({ nextHandler }) {
  const appDispatch = useDispatch();
  const { isResetting } = useSelector((state) => state.filter);
  const { currentDateSetter, currentSortSetter, resetFilter } = filterActions;

  function selectDateHandler(val) {
    appDispatch(currentDateSetter(val));
  }
  function selectSortHandler(val) {
    appDispatch(currentSortSetter(val));
  }

  function resetHandler() {
    appDispatch(resetFilter());
  }

  return (
    <div>
      <Login nextHandler={nextHandler} />
      <div className="mt-8 mb-12 border-2 w-1/3 mx-auto border-slate-400 rounded-full"></div>
      <Select
        list={selectTimeFilter}
        img={imgs.date}
        dispacher={selectDateHandler}
        isResetting={isResetting}
      />
      <Select
        list={selectSortFilter}
        img={imgs.sort}
        dispacher={selectSortHandler}
        isResetting={isResetting}
      />
      <div className="mt-8 mb-12 border-2 w-1/3 mx-auto border-slate-400 rounded-full"></div>
      <button
        onClick={resetHandler}
        className="p-3 bg-red-400/90 w-full rounded-2xl text-slate-100"
      >
        Reset
      </button>
    </div>
  );
}

export default function SliceFilter({ nextHandler }) {
  return (
    <ReduxProvider>
      <SliceFilterBody nextHandler={nextHandler} />
    </ReduxProvider>
  );
}
