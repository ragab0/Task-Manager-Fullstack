"use client";
import FileSaver from "file-saver";
import ReduxProvider from "@/providers/ReduxProvider";
import { mainActions } from "@/toolkits/features/main/mainSlice";
import { useDispatch, useSelector } from "react-redux";

function SettingsComp() {
  const appDispatch = useDispatch();
  const { version } = useSelector((state) => state.main);
  async function copyHandler(e) {
    const blob = new Blob([localStorage.getItem("persist:tod")], {
      type: "application/json",
    });
    FileSaver.saveAs(blob, `Tasks_V${String(version).padStart(2, 0)}`);
    appDispatch(mainActions.appVersionSetter());
  }

  return (
    <div className="settings mt-8 underline text-sm font-bold">
      <button
        className="py-2 block w-full h-[75px] border-2 border-dashed border-second"
        onClick={copyHandler}
      >
        <span className="block">Save local version</span>
      </button>
      <label
        className="mt-4 w-full h-[75px] cursor-pointer flex justify-center items-center
       border-dashed border-2 border-second"
      >
        Upload local version
        <input type="file" className="hidden" />
      </label>
    </div>
  );
}

export default function Settings() {
  return (
    <ReduxProvider>
      <SettingsComp />
    </ReduxProvider>
  );
}
