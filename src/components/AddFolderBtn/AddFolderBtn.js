"use client";
import { useDispatch } from "react-redux";
import { modalActions } from "@/toolkits/features/modal/modalSlice";
import ReduxProvider from "../../providers/ReduxProvider";

function AddFolderBtnBody() {
  const appDispatch = useDispatch();

  function addFolderHandler() {
    appDispatch(modalActions.modalAddFolderSetter());
  }

  return (
    <div className="px-[18px]">
      <button
        className="w-11 h-11 rounded-full bg-slate-100 text-xl"
        onClick={addFolderHandler}
      >
        {"+"}
      </button>
    </div>
  );
}

export default function AddFolderBtn() {
  return (
    <ReduxProvider>
      <AddFolderBtnBody />
    </ReduxProvider>
  );
}
