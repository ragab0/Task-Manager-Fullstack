"use client";

import Header from "@/components/Header/Header";
import Tasks from "@/components/Tasks/Tasks";
import ReduxProvider from "@/providers/ReduxProvider";
import { useSelector } from "react-redux";

/**
 * since we don't use remote db - third party, api - we'll use the use client
 * from this point direct till we move to a server side db;
 *
 */

function ClientSideComp({ paramId }) {
  const { boards } = useSelector((state) => state.board);

  if (!boards.find((b) => b.id === paramId)) {
    return <></>;
  }

  return (
    <div>
      <Header />
      <Tasks />
    </div>
  );
}

export default function ClientSide({ paramId }) {
  return (
    <ReduxProvider>
      <ClientSideComp paramId={paramId} />
    </ReduxProvider>
  );
}
