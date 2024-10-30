"use client";
import Image from "next/image";
import Link from "next/link";
import ReduxProvider from "@/providers/ReduxProvider";
import { useSelector } from "react-redux";
import { imgs } from "@/assets/imgs/index";

const { vector, admin } = imgs;

function ProfileOverviewComp({ isProfiler = false }) {
  const { name, bio, photo } = useSelector((state) => state.user.userFormData);

  return (
    <section
      className={`profile-overview-section flex ${
        isProfiler
          ? " justify-center items-start"
          : "justify-between items-center p-4 border-b-[1px]"
      } `}
    >
      <figure
        className={`capitalize grid grid-cols-[auto_1fr] ${
          isProfiler ? "items-center" : "items-start"
        } gap-3`}
      >
        {isProfiler ? (
          <Image
            src={photo || vector}
            alt="profile-img"
            width={60}
            height={60}
            className="rounded-full"
          />
        ) : (
          <Link href="/" className="rounded-full overflow-hidden">
            <Image
              src={photo || vector}
              alt="profile-img"
              width={28}
              height={28}
            />
          </Link>
        )}
        <figcaption className="overflow-hidden">
          <h4
            className={`text-ellipsis overflow-hidden ${
              isProfiler ? "text-xl" : "text-sm"
            }`}
          >
            {name || "UnNamed"}
          </h4>
          <span
            className={` break-all block ms-[1px] ${
              isProfiler ? "text-xs" : "text-[10px]"
            }`}
          >
            {bio || "UnTitled"}
          </span>
        </figcaption>
      </figure>
      {!isProfiler && (
        <Link href="/" className="p-1 rounded-full">
          <Image alt="admin" src={admin} width={22} height={22} />
        </Link>
      )}
    </section>
  );
}

export default function ProfileOverview({ isProfiler }) {
  return (
    <ReduxProvider>
      <ProfileOverviewComp isProfiler={isProfiler} />
    </ReduxProvider>
  );
}
