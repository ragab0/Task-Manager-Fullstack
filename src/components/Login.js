import Image from "next/image";
import { imgs } from "@/assets/imgs/index"
const { vector, admin } = imgs;


export default function () {
  return (
    <div className="flex items-center justify-between p-4 overflow-hidden bg-white  rounded-2xl">
      <figure className="capitalize inline-flex items-start gap-3 ">
        <Image src={vector} alt="img" color="red" />
        <figcaption>
          <h4>Legend</h4>
          <span className="text-[10px]">the brother</span>
        </figcaption>  
      </figure>
      <button>
        <Image alt="admin" src={admin} className="w-10 h-10 p-2" />
      </button>
    </div>
  )
}
