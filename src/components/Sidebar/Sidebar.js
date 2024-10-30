"use client";
import "./Sidebar.css";
import ReduxProvider from "../../providers/ReduxProvider";
import Link from "next/link";
import Plus from "@/assets/icons/Plus";
import { useSelector } from "react-redux";
import { boards, views } from "@/assets/data/sidebarData";
import ProfileOverview from "../ProfileOverview/ProfileOverview";

function SlidesBody() {
  const { isSettings } = useSelector((state) => state.main);

  return (
    <aside
      className={`sidebar basis-[300px] ${
        isSettings ? "left-0" : "-left-full"
      } md:p-5 fixed top-0  h-screen md:sticky md:left-0 grid z-[49]`}
    >
      <div className="bg-slate-100 md:rounded-2xl overflow-x-hidden">
        {/* profile-overview section */}
        <ProfileOverview />
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
