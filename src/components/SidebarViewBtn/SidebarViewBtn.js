"use client";
import Image from "next/image";
import ReduxProvider from "@/providers/ReduxProvider";
import { imgs } from "@/assets/imgs";
import { useDispatch, useSelector } from "react-redux";
import { mainActions } from "@/toolkits/features/main/mainSlice";

const { menu, x: close } = imgs;

function SidebarViewBtnComp() {
  const { isSettings } = useSelector((state) => state.main);
  const dispaatch = useDispatch();

  function menuHandler(value) {
    dispaatch(mainActions.appIsSettingsSetter(!isSettings));
  }

  return (
    <button
      onClick={menuHandler}
      className="w-12 h-12 p-2 bg-slate-100 rounded-full flex items-center justify-center shadow-xl md:hidden"
    >
      <Image alt="settings" src={isSettings ? close : menu} />
    </button>
  );
}

export default function SidebarViewBtn() {
  return (
    <ReduxProvider>
      <SidebarViewBtnComp />
    </ReduxProvider>
  );
}
