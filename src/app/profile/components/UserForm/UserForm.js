"use client";
import ReduxProvider from "../../../../providers/ReduxProvider";
import { useDispatch, useSelector } from "react-redux";
import { accountFields } from "@/assets/data/data";
import { userActions } from "@/toolkits/features/user/userSlice";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { toast } from "react-toastify";

function UserFormComp() {
  const appDispatch = useDispatch();
  const { userFormData } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: userFormData,
    mode: "onChange",
  });

  function cancelHandler() {
    reset(userFormData);
  }

  function submitHandler(data) {
    appDispatch(userActions.userFormDataSetter(data));
    toast.success("Profile updated!");
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="capitalize w-fit mx-auto"
      >
        {accountFields.map(({ name: n, type: t, mandatory }, i) => (
          <label key={i} className="text-sm font-bold block">
            {n}
            {mandatory && (
              <span className="text-[#e34935] inline-block">*</span>
            )}
            <input
              {...register(
                n,
                mandatory && {
                  required: `${n} is required!`,
                }
              )}
              type={t}
              className={`p-2 w-full bg-slate-100 border-2 border-second text-xs ${
                mandatory && errors[n] ? "border-[#e34935]  outline-none" : ""
              }`}
            />
          </label>
        ))}
        <div className="text-sm">
          <div
            className={`${
              isValid ? "" : "opacity-50 cursor-not-allowed"
            } inline-block`}
          >
            <button
              type="submit"
              className={`me-1 btn-primary ${
                isValid ? "" : "pointer-events-none"
              }`}
            >
              save
            </button>
          </div>
          <button
            type="button"
            onClick={cancelHandler}
            className="capitalize text-[#172b4d] bg-[#091e420f] py-[6px] px-3 rounded-md hover:opacity-80"
          >
            cancel
          </button>
        </div>
      </form>
      <DevTool control={control} />
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
