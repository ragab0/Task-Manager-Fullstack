import Image from "next/image";
import { imgs } from "@/assets/imgs";
const { arrow } = imgs;


export default function Arrow() {
  return (
    <button className="p-3 hover:scale-125 rotate-180 cursor-pointer">
      <Image src={arrow} alt="arrow" className="w-[10px] h-[10px]" />
    </button>
  )
}
