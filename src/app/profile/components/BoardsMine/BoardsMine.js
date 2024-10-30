"use client";
import { modalActions } from "@/toolkits/features/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { imgs } from "@/assets/imgs";
import Link from "next/link";
import ReduxProvider from "@/providers/ReduxProvider";
import Image from "next/image";
import { boardActions } from "@/toolkits/features/board/boardSlice";

const { x } = imgs;

function BoardsMineComp() {
  const appDispatch = useDispatch();
  const { boards } = useSelector((state) => state.board);

  function addBoardHandler() {
    appDispatch(modalActions.modalAddBoardSetter());
  }

  function removeBoardHandler(title) {
    appDispatch(boardActions.removeBoard({ title }));
  }

  return (
    <div>
      <ul
        className="profile-page-boards-mine grid gap-4"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        }}
      >
        {boards.map(({ title, type }, i) => (
          <li key={i} className=" flex flex-col">
            <Link
              href={`/board/${title}${type !== "basic" ? `?type=${type}` : ""}`}
              style={{ backgroundImage: `url("/colors/ocean.svg")` }}
              className="p-2 block min-h-[100px] h-full font-bold text-white capitalize rounded-[.25rem]"
            >
              {title}
              <span className="block italic text-xs">{type}</span>
            </Link>
            <button
              className="self-end mt-[1px] text-xs capitalize bg-red-500 text-white py-[6px] px-3 rounded-md hover:opacity-80"
              onClick={() => removeBoardHandler(title)}
            >
              remove
            </button>
          </li>
        ))}
        <li>
          <button
            className="p-2 block min-h-[100px] w-full h-full font-bold capitalize rounded-[.25rem]
            bg-slate-100 shadow-md hover:bg-opacity-5"
            onClick={addBoardHandler}
          >
            {"+"}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default function BoardsMine() {
  return (
    <ReduxProvider>
      <BoardsMineComp />
    </ReduxProvider>
  );
}
