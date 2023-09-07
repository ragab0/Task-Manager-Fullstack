import { imgs } from "@/assets/imgs";
import Image from "next/image";

export default function LefttSide() {
  return (
    <section className="bg-slate-100 static top-0 left-0 px-5 py-10 rounded-2xl">
      <figure>
        <Image alt="user" src={imgs.avatar1} className=" mx-auto rounded-full overflow-hidden" />
        <figcaption className="mt-2 mb-10">
          <h4 className="text-center">
            Hello, User 👋
          </h4>
        </figcaption>
      </figure>
    </section>
  )
}
