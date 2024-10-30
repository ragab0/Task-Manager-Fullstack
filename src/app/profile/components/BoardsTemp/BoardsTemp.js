"use client";
import ReduxProvider from "@/providers/ReduxProvider";
import { boardsTempData } from "@/assets/data/sidebarData";
import { modalActions } from "@/toolkits/features/modal/modalSlice";
import { useDispatch } from "react-redux";

function BoardsTempComp() {
  const dispatch = useDispatch();
  function addTempBasicBoardHandler() {
    dispatch(modalActions.modalAddTempBasicBoard());
  }

  function addTempKanbanBoardHandler() {
    dispatch(modalActions.modalAddTempKanbanBoard());
  }

  return (
    <div>
      <ul className="grid grid-cols-2 gap-4">
        {boardsTempData.map(({ name, bgOverview, type }, i) => (
          <li key={i}>
            <div
              style={{ backgroundColor: bgOverview }}
              className="p-2 block w-100 min-h-[100px] text-white capitalize rounded-[.25rem] cursor-pointer"
              onClick={
                type === "kanban"
                  ? addTempKanbanBoardHandler
                  : addTempBasicBoardHandler
              }
            >
              <button className="block text-[10px] px-1 py-[2px] rounded-md bg-[#454F59] text-[#B6C2CF]">
                Template
              </button>
              <span className="font-bold">{name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function BoardsTemp() {
  return (
    <ReduxProvider>
      <BoardsTempComp />
    </ReduxProvider>
  );
}
