"use client";
import { useDispatch, useSelector } from "react-redux";
import { folderActions } from "@/toolkits/features/folder/folderSlice";
import { modalActions } from "@/toolkits/features/modal/modalSlice";
import ModalHeader from "../ModalHeader/ModalHeader";

export default function ModalAddFolder({ closeHandler }) {
  const appDispatch = useDispatch();
  const { addFolderField } = useSelector((state) => state.folder);

  function valueHandler(e) {
    appDispatch(folderActions.folderAddFieldSetter(e.target.value));
  }

  function submitHandler(e) {
    console.log("sss");
    e.preventDefault();
    appDispatch(folderActions.folderAddSubmitSetter());
    appDispatch(modalActions.modalRemoveRear());
  }

  return (
    <ModalHeader heading={"Add folder"} closeHandler={closeHandler}>
      <div
        // onSubmit={submitHandler}
        className="task-from content-start text-start capitalize"
      >
        <input
          name="title"
          value={addFolderField}
          onChange={valueHandler}
          placeholder="Folder name"
        />
        <button
          onClick={submitHandler}
          className={`btn-main w-full mb-2 mt-4 `}
        >
          {"Add"}
        </button>
      </div>
    </ModalHeader>
  );
}
