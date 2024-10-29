import { boards } from "@/assets/data/sidebarData";
import Link from "next/link";

export default function BoardsMine() {
  return (
    <div>
      <ul className="grid grid-cols-[] gap-4">
        {boards.map(({ name, link, linearUrl }, i) => (
          <li key={i}>
            <Link
              href={link}
              style={{ backgroundImage: `url(${linearUrl})` }}
              className="p-2 block min-h-[100px] font-bold text-white capitalize rounded-[.25rem]"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
