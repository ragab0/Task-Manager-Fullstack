"use client";
import ModalHeader from "../ModalHeader/ModalHeader";
import ReduxProvider from "@/providers/ReduxProvider";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { boardFields } from "@/assets/data/data";

function ModalBoardFormComp({ isTempBaordType = null }) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  function submitHandler(data) {
    console.log(data);
    toast.success("Board added!");
  }

  return (
    <ModalHeader heading={"Add Board"}>
      <form onSubmit={handleSubmit(submitHandler)} className="capitalize ">
        {boardFields.map(({ label, name, type, mandatory, options }, i) => (
          <label
            key={i}
            className={`text-sm font-bold block ${
              type === "select" && isTempBaordType
                ? " pointer-events-none opacity-50"
                : ""
            }`}
          >
            {label}
            {mandatory && (
              <span className="text-[#e34935] inline-block">*</span>
            )}
            {type !== "select" ? (
              <input
                {...register(
                  name,
                  mandatory && {
                    required: `${name} is required!`,
                  }
                )}
                type={type}
                className={`p-2 w-full bg-slate-100 border-2 border-second text-xs ${
                  mandatory && errors[name]
                    ? "border-[#e34935]  outline-none"
                    : ""
                }`}
              />
            ) : (
              <Controller
                name={name}
                control={control}
                defaultValue={
                  isTempBaordType
                    ? options.find((o) => o.value === isTempBaordType)?.value
                    : undefined
                }
                rules={{
                  required: mandatory ? `${name} is required!` : false,
                }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={options}
                    value={options.find(
                      (option) => option.value === field.value
                    )}
                    onChange={(selectedOption) =>
                      field.onChange(selectedOption.value)
                    }
                    className={`${
                      mandatory && errors[name]
                        ? "border-[#e34935]  outline-none"
                        : ""
                    }`}
                    classNamePrefix="select"
                  />
                )}
              />
            )}
          </label>
        ))}
        <div
          className={`w-full ${
            isValid ? "" : "opacity-50 cursor-not-allowed"
          } inline-block`}
        >
          <button
            className={`btn-secondery ${isValid ? "" : "pointer-events-none"}`}
          >
            Add
          </button>
        </div>
      </form>
    </ModalHeader>
  );
}

export default function ModalBoardForm({ isTempBaordType }) {
  return (
    <ReduxProvider>
      <ModalBoardFormComp isTempBaordType={isTempBaordType} />
    </ReduxProvider>
  );
}
