import ProfileOverview from "@/components/ProfileOverview/ProfileOverview";
import UserForm from "@/app/profile/components/UserForm/UserForm";
import React from "react";
import BoardsMine from "./components/BoardsMine/BoardsMine";
import BoardsTemp from "./components/BoardsTemp/BoardsTemp";
import TempBoardIcon from "@/assets/icons/TempBoard";
import Settings from "./components/Settings/Settings";

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="profile-page-header py-8 grid grid-cols-2 justify-center border-y-2 border-second">
        <div>
          <ProfileOverview isProfiler={true} />
        </div>
        <UserForm />
      </div>
      <div className="profile-page-boards py-8 ">
        <h2 className="text-xl mb-8">Boards</h2>
        <div className="mb-4">
          <div className="flex gap-2 items-center">
            <i>
              <TempBoardIcon />
            </i>
            <h3 className="text-lg mb-0">Most popular templates</h3>
          </div>
          <span className="block text-sm mt-1 mb-4">
            Get going faster with a template:
          </span>
          <BoardsTemp />
        </div>
        <div className="mt-8">
          <div className="flex gap-2 items-center mb-4">
            <i>
              <TempBoardIcon />
            </i>
            <h3 className="text-lg mb-0">My boards</h3>
          </div>
          <BoardsMine />
        </div>
      </div>
      <div className="profile-page-settings py-8 mt-3 border-t-2 border-second">
        <h2 className="text-xl mb-8">Settings</h2>
        <Settings />
      </div>
    </div>
  );
}
