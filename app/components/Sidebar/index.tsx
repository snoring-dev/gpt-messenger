import React from "react";
import ConversationsList from "./ConversationsList";
import UserMenu from "./UserMenu";

function Sidebar() {
  return (
    <div className="hidden sm:flex w-[400px] bg-platinium h-full rounded-r-3xl flex-col items-center justify-between">
      <div className="h-[60%] w-full pt-[40px]">
        <ConversationsList />
      </div>
      <div className="relative h-[40%] w-full">
        <UserMenu />
      </div>
    </div>
  );
}

export default Sidebar;
