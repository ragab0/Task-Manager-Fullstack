import Image from "next/image";
import { imgs } from "@/assets/imgs";

const { x } = imgs;

export default function ModalHeader({ children, heading, closeHandler }) {
  function mouseCloserHandler(e) {
    e.target.closest(".box") || closeHandler();
  }

  return (
    <div
      onClick={mouseCloserHandler}
      className="modal min-h-[250px] cursor-pointer px-4 py-8 flex
      justify-center items-center bg-black/40 fixed top-0 left-0 w-full h-full z-50"
    >
      <div className="box cursor-default max-w-lg w-full overflow-auto bg-slate-100 p-5 rounded-md">
        <header className=" flex justify-between items-center mb-5 capitalize">
          <h3 className="mb-0">{heading}</h3>
          <button
            onClick={closeHandler}
            className="btn-img w-10 h-10 hover:bg-slate-200"
          >
            <Image alt="close" src={x} />
          </button>
        </header>
        <main className="content animate-slideDown">{children}</main>
      </div>
    </div>
  );
}
