"use client";
import Header from "@/components/Header/Header";
import Tasks from "@/components/Tasks/Tasks";
import ReduxProvider from "@/providers/ReduxProvider";
import { useSelector } from "react-redux";
import { notFound } from "next/navigation";

/**
 * since we don't use remote db - third party, api - we'll use the use client
 * from this point direct till we move to a server side db;
 *
 */

function ClientSideComp({ boardId }) {
  const { boards } = useSelector((state) => state.board);
  const boardExists = boards.some((board) => board.title === boardId);
  if (!boardExists) {
    notFound();
    return null;
  }

  return (
    <div>
      <Header />
      <Tasks />
    </div>
  );
}

export default function ClientSide({ boardId }) {
  return (
    <ReduxProvider>
      <ClientSideComp boardId={boardId} />
    </ReduxProvider>
  );
}
