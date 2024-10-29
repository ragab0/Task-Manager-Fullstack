import { boardsTempData } from "@/assets/data/sidebarData";
import Link from "next/link";

export default function BoardsTemp() {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-4">
        {boardsTempData.map(({ name, link, bgOverview }, i) => (
          <li key={i}>
            <Link
              href={link}
              style={{ backgroundColor: bgOverview }}
              className="p-2 block min-h-[100px] text-white capitalize rounded-[.25rem]"
            >
              <button className="block text-[10px] px-1 py-[2px] rounded-md bg-[#454F59] text-[#B6C2CF]">
                Template
              </button>
              <span className="font-bold">{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
