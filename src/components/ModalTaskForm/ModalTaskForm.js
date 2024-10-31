"use client";
import ModalHeader from "../ModalHeader/ModalHeader";
import Select from "react-select";
import { taskActions } from "@/toolkits/features/task/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import { DevTool } from "@hookform/devtools";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function ModalTaskForm({ isUpdateModal = false, payload }) {
  const appDispatch = useDispatch();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: isUpdateModal ? payload?.task : undefined,
  });
  const { folders } = useSelector((state) => state.folder);
  const { tasksList } = useSelector((state) => state.task);

  function addTaskHandler(data) {
    if (tasksList.find((t) => t.name === data.name)) {
      return toast.error("Task already exists! Please choose unique name");
    }
    appDispatch(taskActions.addTask({ taskData: data }));
    toast.success("Task has been added!");
  }

  function updateTaskHandler(data) {
    appDispatch(taskActions.updateTask({ updatedData: data }));
    toast.success("Task has been updated!");
  }

  return (
    <ModalHeader heading={isUpdateModal ? "Edit" : "Add task"}>
      <form
        onSubmit={handleSubmit(
          isUpdateModal ? updateTaskHandler : addTaskHandler
        )}
        className="task-from content-start text-start capitalize"
      >
        <label className={`text-sm font-bold block`}>
          name
          <span className="text-[#e34935] inline-block">*</span>
          <input
            {...register("name", {
              required: `name is required!`,
            })}
            className={`p-2 w-full bg-slate-100 border-2 border-second text-xs ${
              errors.name ? "border-[#e34935]  outline-none" : ""
            }`}
          />
        </label>
        <label className={`text-sm font-bold block`}>
          date
          <span className="text-[#e34935] inline-block">*</span>
          <input
            type="datetime-local"
            {...register("date", {
              required: `date is required!`,
            })}
            className={`p-2 w-full bg-slate-100 border-2 border-second text-xs ${
              errors.date ? "border-[#e34935]  outline-none" : ""
            }`}
          />
        </label>
        <label className={`text-sm font-bold block`}>
          description
          <span className="text-[#e34935] inline-block">*</span>
          <textarea
            rows={3}
            {...register("desc", {
              required: `description is required!`,
            })}
            className={`p-2 w-full bg-slate-100 border-2 border-second text-xs ${
              errors.desc ? "border-[#e34935]  outline-none" : ""
            }`}
          ></textarea>
        </label>
        <label className={`text-sm font-bold block`}>
          Assigned folder
          <span className="text-[#e34935] inline-block">*</span>
          {
            <Controller
              name={"folder"}
              control={control}
              // defaultValue={
              //   isTempBaordType
              //     ? options.find((o) => o.value === isTempBaordType)?.value
              //     : undefined
              // }
              rules={{
                required: `folder is required!`,
              }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={folders
                    ?.filter((v) => v !== "all")
                    .map((v) => ({
                      label: v,
                      value: v,
                    }))}
                  value={folders.find((o) => o.value === field.value)}
                  onChange={(selectedOption) =>
                    field.onChange(selectedOption.value)
                  }
                  className={`${
                    errors["folder"] ? "border-[#e34935]  outline-none" : ""
                  }`}
                  classNamePrefix="select"
                />
              )}
            />
          }
        </label>
        <div
          className={`w-full ${
            isValid ? "" : "opacity-50 cursor-not-allowed"
          } inline-block`}
        >
          <button
            className={`btn-secondery ${isValid ? "" : "pointer-events-none"}`}
          >
            {isUpdateModal ? "Save changes" : "Add task"}
          </button>
        </div>
      </form>
      <DevTool control={control} />
    </ModalHeader>
  );
}
