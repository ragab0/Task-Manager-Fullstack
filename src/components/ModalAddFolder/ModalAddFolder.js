"use client";
import ModalHeader from "../ModalHeader/ModalHeader";
import { useDispatch, useSelector } from "react-redux";
import { folderActions } from "@/toolkits/features/folder/folderSlice";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const isFolderEditted = false;

export default function ModalAddFolder() {
  const appDispatch = useDispatch();
  const { folders } = useSelector((state) => state.folder);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  function submitHandler(data) {
    const folder = data.name?.toLocaleLowerCase();
    if (folders.includes(folder)) {
      return toast.error("Folder already exists! Please choose unique name.");
    }
    appDispatch(folderActions.addFolder({ folder }));
    toast.success("Folder has been added!");
  }

  return (
    <ModalHeader heading={"Add folder"}>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="task-from content-start text-start capitalize"
      >
        <label className={`text-sm font-bold block`}>
          name
          <span className="text-[#e34935] inline-block">*</span>
          <input
            type="text"
            {...register("name")}
            className={`p-2 w-full bg-slate-100 border-2 border-second text-xs ${
              errors.name ? "border-[#e34935]  outline-none" : ""
            }`}
          />
        </label>
        <div
          className={`w-full ${
            isValid ? "" : "opacity-50 cursor-not-allowed"
          } inline-block`}
        >
          <button
            className={`btn-secondery ${isValid ? "" : "pointer-events-none"}`}
          >
            {isFolderEditted ? "save changes" : "add folder"}
          </button>
        </div>
      </form>
    </ModalHeader>
  );
}
