"use client";
import Image from "next/image";
import ReduxProvider from "./ReduxProvider";
import { useSelector } from "react-redux";
import { imgs } from "@/assets/imgs/index";

const { vector, admin } = imgs;

function LoginBody({ nextHandler }) {
  const { name, bio } = useSelector((state) => state.user.userFormData);
  return (
    <div className="grid grid-cols-[1fr_40px] items-center justify-between p-4 bg-white  rounded-2xl">
      <figure className="capitalize grid grid-cols-[auto_1fr] items-start gap-3 ">
        <Image src={vector} alt="img" color="red" />
        <figcaption className=" overflow-hidden ">
          <h4 className="text-ellipsis overflow-hidden">{name}</h4>
          <span className="text-[10px] break-all leading-4 block mt-1">
            {bio}
          </span>
        </figcaption>
      </figure>
      <button className="btn-img" onClick={nextHandler}>
        <Image alt="admin" src={admin} />
      </button>
    </div>
  );
}

export default function Login({ nextHandler }) {
  return (
    <ReduxProvider>
      <LoginBody nextHandler={nextHandler} />
    </ReduxProvider>
  );
}
