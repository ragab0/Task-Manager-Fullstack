"use client";
// All modals are rendered in client-side;

import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "@/toolkits/features/modal/modalSlice";
import { useEffect } from "react";
import ReduxProvider from "../../providers/ReduxProvider";

import ModalAddFolder from "@/components/ModalAddFolder/ModalAddFolder";
import ModalTaskForm from "@/components/ModalTaskForm/ModalTaskForm";
import ModalBoardForm from "../ModalBoardForm/ModalBoardForm";
import { toast } from "react-toastify";

export const dataModals = {
  addFolder: {
    Comp: ModalAddFolder,
  },
  addBoard: {
    Comp: ModalBoardForm,
  },
  addTempKanbanBoard: {
    Comp: ({ payload }) => (
      <ModalBoardForm isTempBaordType={"kanban"} payload={payload} />
    ),
  },
  addTempBasicBoard: {
    Comp: ({ payload }) => (
      <ModalBoardForm isTempBaordType={"basic"} payload={payload} />
    ),
  },
  taskForm: {
    Comp: ModalTaskForm,
  },
  taskFormUpdate: {
    Comp: ({ payload }) => (
      <ModalTaskForm isUpdateModal={true} payload={payload} />
    ),
  },
};

function ModalsBody() {
  const { modalList } = useSelector((state) => state.modal);
  const appDispatch = useDispatch();

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.keyCode === 27 && modalList.length > 0) {
        appDispatch(modalActions.modalRemoveRear());
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalList]);

  return (
    <div>
      {modalList.map(({ name, payload }, i) => {
        const Comp = dataModals[name].Comp;
        if (!Comp) {
          return toast.error(
            // "There is modal doesn't have a UI !! check the centralized modals file.",
            "Something went wrong!, please contact us.",
            { autoClose: false }
          );
        }
        return <Comp key={i} payload={payload} />;
      })}
    </div>
  );
}

export default function Modals() {
  return (
    <ReduxProvider>
      <ModalsBody />
    </ReduxProvider>
  );
}
