"use client";
import { modalActions } from "@/utils/actions";
import { useGlobalContext } from "@/utils/context";


export default function AddFolderBtn() {
  const {
    appDispatch
  } = useGlobalContext();

  function addFolderHandler(value) {
    appDispatch(modalActions.isAddingFolderModalSetter(value));
  }


  return (
    <div className="px-[18px]">
      <button className='w-11 h-11 rounded-full bg-slate-100 text-xl' onClick={() => addFolderHandler(true)}>{"+"}</button>
    </div>
  )
}
