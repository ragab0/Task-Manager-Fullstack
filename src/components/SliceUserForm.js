"use client";
import Image from "next/image";
import FileSaver from "file-saver";
import store from "@/toolkits/store";
import ReduxProvider from "./ReduxProvider";
import { useDispatch, useSelector } from "react-redux";
import { accountFields } from "@/assets/data/data";
import { imgs } from "@/assets/imgs";
import { userActions } from "@/toolkits/features/user/userSlice";
import { mainActions } from "@/toolkits/features/main/mainSlice";
const { x } = imgs;

function SliceUserFormBody({ nextHandler }) {
  const appDispatch = useDispatch();
  const { version } = useSelector((state) => state.main);
  const { userFormData } = useSelector((state) => state.user);

  function valueHandler(e) {
    appDispatch(
      userActions.userFormDataSetter({
        name: e.target.name,
        value: e.target.value,
      })
    );
  }

  async function copyHandler(e) {
    const blob = new Blob([JSON.stringify(store.getState())], {
      type: "application/json",
    });
    FileSaver.saveAs(blob, `Tasks_V${String(version).padStart(2, 0)}`);
    appDispatch(mainActions.appVersionSetter());
  }

  return (
    <div>
      <button className="btn-img w-12 h-12 mx-auto block hover:bg-slate-200">
        <Image alt="back" src={x} onClick={nextHandler} />
      </button>
      <div className="my-8 border-2 w-1/3 mx-auto border-slate-200 rounded-full"></div>
      <form className=" capitalize">
        {accountFields.map(({ name: n, type: t }, i) => (
          <label key={i} className="mb-3 block">
            <span className="text-sm mb-1 block">{n}</span>
            <input
              type={t}
              name={n}
              className="p-2 bg-white w-full text-sm"
              value={userFormData[n]}
              onChange={valueHandler}
            />
          </label>
        ))}
      </form>
      <div className="my-8 border-2 w-1/3 mx-auto border-slate-200 rounded-full"></div>
      <button
        className="underline py-2 block mx-auto text-green-500"
        onClick={copyHandler}
      >
        <span className="block">Save your data</span>
        local version
      </button>
      <div className="my-2 w-full h-[100px] bg-slate-200 cursor-pointer flex justify-center items-center">
        Upload
      </div>
    </div>
  );
}

export default function SliceUserForm({ nextHandler }) {
  return (
    <ReduxProvider>
      <SliceUserFormBody nextHandler={nextHandler} />
    </ReduxProvider>
  );
}
