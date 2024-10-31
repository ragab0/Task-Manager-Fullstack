import Image from "next/image";
import { imgs } from "@/assets/imgs/";

const notFoundImg = imgs.notFound;

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen -mt-5 pointer-events-none">
      <Image alt="not-found" width={400} height={400} src={notFoundImg} />
    </div>
  );
}

/**
 * redux persist not work with file !!!!!!!!!!!!!!!!!!!!!!!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 */
