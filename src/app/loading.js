"use client";
import { DotLoader } from "react-spinners";

export default function Loading(props) {
  return (
    <div className="w-full h-full min-w-screen min-h-screen flex justify-center items-center">
      <DotLoader
        color="rgb(157 0 238)"
        loading
        size={180}
        speedMultiplier={2}
        {...props}
      />
    </div>
  );
}