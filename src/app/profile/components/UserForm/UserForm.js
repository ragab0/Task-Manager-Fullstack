"use client";
import FileSaver from "file-saver";
import ReduxProvider from "../../../../providers/ReduxProvider";
import { useDispatch, useSelector } from "react-redux";
import { accountFields } from "@/assets/data/data";
import { userActions } from "@/toolkits/features/user/userSlice";
import { mainActions } from "@/toolkits/features/main/mainSlice";

function UserFormComp() {
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
    const blob = new Blob([localStorage.getItem("persist:tod")], {
      type: "application/json",
    });
    FileSaver.saveAs(blob, `Tasks_V${String(version).padStart(2, 0)}`);
    appDispatch(mainActions.appVersionSetter());
  }

  return (
    <div>
      <form className="capitalize w-fit mx-auto">
        {accountFields.map(({ name: n, type: t }, i) => (
          <label key={i} className="text-sm font-bold block">
            {n}
            <span className="text-[#e34935] inline-block">*</span>
            <input
              type={t}
              name={n}
              className="p-2 w-full bg-slate-100 border-2 border-second text-xs"
              value={userFormData[n]}
              onChange={valueHandler}
            />
          </label>
        ))}
      </form>
    </div>
  );
}

export default function UserForm() {
  return (
    <ReduxProvider>
      <UserFormComp />
    </ReduxProvider>
  );
}
