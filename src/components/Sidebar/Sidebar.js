"use client";
import "./Sidebar.css";
import ReduxProvider from "../../providers/ReduxProvider";
import Link from "next/link";
import Plus from "@/assets/icons/Plus";
import Image from "next/image";
import { useSelector } from "react-redux";
import { boards, views } from "@/assets/data/sidebarData";
import { imgs } from "@/assets/imgs/index";

const { vector, admin } = imgs;

function SlidesBody() {
  const { name, bio } = useSelector((state) => state.user.userFormData);
  const { isSettings } = useSelector((state) => state.main);

  return (
    <aside
      className={`sidebar ${
        isSettings ? "left-0" : "-left-full"
      } md:p-5 fixed top-0  h-screen md:sticky md:left-0 grid z-[49]`}
    >
      <div className="bg-slate-100 md:rounded-2xl overflow-x-hidden">
        {/* profile-overview section */}
        <section className="grid grid-cols-[1fr_40px] items-center justify-between p-4 border-b-[1px]">
          <figure className="capitalize grid grid-cols-[auto_1fr] items-start gap-3 ">
            <Link href="/" className="rounded-full overflow-hidden">
              <Image src={vector} alt="img" color="red" width={28} />
            </Link>
            <figcaption className="overflow-hidden">
              <h4 className="text-sm text-ellipsis overflow-hidden">{name}</h4>
              <span className="text-[10px] break-all block ms-[1px]">
                {bio}
              </span>
            </figcaption>
          </figure>
          <Link href="/" className="btn-img">
            <Image alt="admin" src={admin} />
          </Link>
        </section>
        {/* workspace view section */}
        <section>
          <h2 className="text-sm capitalize py-2 px-3 mb-0">workspace view</h2>
          <ul className="views-items">
            {views.map(({ name, link, Ico }, i) => (
              <Link
                key={i}
                href={link}
                className=" capitalize italic py-2 px-3 cursor-pointer flex items-center gap-2 text-sm"
              >
                <Ico width={16} height={16} />
                <span>{name}</span>
              </Link>
            ))}
          </ul>
        </section>
        {/* boards section */}
        <section>
          <h2 className="text-sm capitalize py-2 px-3 mb-0 flex justify-between items-center">
            your boards
            <button className="p-1 rounded-[4px]">
              <Plus width={16} height={16} />
            </button>
          </h2>
          <ul className="views-items">
            {boards.map(({ name, link, linearUrl }, i) => (
              <Link
                key={i}
                href={link}
                className=" capitalize italic py-2 px-3 cursor-pointer flex items-center gap-2 text-sm"
              >
                <span
                  className="block w-6 h-5 rounded-sm"
                  style={{ background: `url(${linearUrl})` }}
                ></span>
                <span>{name}</span>
              </Link>
            ))}
          </ul>
        </section>
      </div>
    </aside>
  );
}

export default function Slides() {
  return (
    <ReduxProvider>
      <SlidesBody />
    </ReduxProvider>
  );
}
