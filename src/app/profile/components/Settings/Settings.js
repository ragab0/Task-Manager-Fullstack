"use client";
import ReduxProvider from "@/providers/ReduxProvider";
import { mainActions } from "@/toolkits/features/main/mainSlice";
import { useDispatch } from "react-redux";

function SettingsComp() {
  const dispatch = useDispatch();
  function saveHandler(e) {
    dispatch(mainActions.saveLocaleCopy());
  }

  function uploadHandler(e) {
    const version = e.target.files[0];

    if (version) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target.result;
        dispatch(
          mainActions.uploadLocaleVersion({ localeState: JSON.parse(result) })
        );
      };
      reader.readAsText(version);
    }
  }

  return (
    <div className="settings mt-8 underline text-sm font-bold">
      <button
        className="py-2 block w-full h-[75px] border-2 border-dashed border-second"
        onClick={saveHandler}
      >
        <span className="block">Save local version</span>
      </button>
      <label
        className="mt-4 w-full h-[75px] cursor-pointer flex justify-center items-center
       border-dashed border-2 border-second"
      >
        Upload local version
        <input type="file" className="hidden" onChange={uploadHandler} />
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
