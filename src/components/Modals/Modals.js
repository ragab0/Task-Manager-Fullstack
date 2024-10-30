"use client";
// All modals are rendered in client-side;

import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "@/toolkits/features/modal/modalSlice";
import { useEffect } from "react";
import ReduxProvider from "../../providers/ReduxProvider";

import ModalAddFolder from "@/components/ModalAddFolder/ModalAddFolder";
import ModalTaskForm from "@/components/ModalTaskForm/ModalTaskForm";
import ModalBoardForm from "../ModalBoardForm/ModalBoardForm";

export const dataModals = {
  addFolder: {
    Comp: ModalAddFolder,
  },
  addBoard: {
    Comp: ModalBoardForm,
  },
  addTempKanbanBoard: {
    Comp: () => <ModalBoardForm isTempBaordType={"kanban"} />,
  },
  addTempBasicBoard: {
    Comp: () => <ModalBoardForm isTempBaordType={"basic"} />,
  },
  taskForm: {
    Comp: ModalTaskForm,
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
      {modalList.map((name, i) => {
        const Comp = dataModals[name].Comp;
        return <Comp key={i} />;
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
