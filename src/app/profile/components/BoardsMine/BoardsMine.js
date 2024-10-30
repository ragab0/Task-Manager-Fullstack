"use client";
import { boards } from "@/assets/data/sidebarData";
import { modalActions } from "@/toolkits/features/modal/modalSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import ReduxProvider from "@/providers/ReduxProvider";

function BoardsMineComp() {
  const appDispatch = useDispatch();

  function addBoardHandler() {
    appDispatch(modalActions.modalAddBoardSetter());
  }

  return (
    <div>
      <ul
        className="profile-page-boards-mine grid gap-4"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        }}
      >
        {boards.map(({ name, link, linearUrl }, i) => (
          <li key={i}>
            <Link
              href={link}
              style={{ backgroundImage: `url(${linearUrl})` }}
              className="p-2 block min-h-[100px] h-full font-bold text-white capitalize rounded-[.25rem]"
            >
              {name}
            </Link>
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
