import React from "react";

export default function Settings() {
  return (
    <div className="settings">
      <div className="my-8 border-2 w-1/3 mx-auto border-slate-400 rounded-full"></div>
      <button
        className="underline py-2 block mx-auto text-green-500"
        onClick={copyHandler}
      >
        <span className="block">Save your data</span>
        local version
      </button>
      <label
        className=" my-2 w-full h-[100px] bg-slate-200 cursor-pointer flex justify-center items-center
       border-dashed border-2 border-gray-400"
      >
        Upload data file
        <input type="file" className="hidden" />
      </label>
    </div>
  );
}
