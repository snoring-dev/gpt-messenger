import { MdOutlineLogout } from "react-icons/md";
import { RiDeleteBin6Line, RiUserStarFill } from "react-icons/ri";
import { GrSync } from "react-icons/gr";
import { HiPlus } from "react-icons/hi";

function UserMenu() {
  return (
    <div className="absolute bottom-0 flex flex-col gap-6 px-10 pb-[100px]">
      <div className="flex flex-row items-center justify-start cursor-pointer">
        <MdOutlineLogout size={24} />
        <div className="font-semibold px-4 text-left text-dark-green">
          Log out
        </div>
      </div>
      <div className="flex flex-row items-center justify-start cursor-pointer">
        <RiDeleteBin6Line size={24} />
        <div className="font-semibold px-4 text-left text-dark-green">
          Delete all conversations
        </div>
      </div>
      <div className="flex flex-row items-center justify-start cursor-pointer">
        <RiUserStarFill size={24} />
        <div className="font-semibold px-4 text-left text-dark-green">
          Upgrade to plus
        </div>
      </div>
      <div className="flex flex-row items-center justify-start cursor-pointer">
        <GrSync size={24} />
        <div className="font-semibold px-4 text-left text-dark-green">
          Updates & FAQ
        </div>
      </div>

      {/* NEW MESSAGE BUTTON */}
      <div className="
        bg-bluish-green
          p-[20px]
          mt-[40px]
          flex
          flex-row
          items-center
          justify-start
          rounded-lg
          cursor-pointer
          hover:bg-bluish-green/80
          transition
        ">
        <HiPlus size={24} className="text-white" />
        <div className="font-semibold text-white text-l pl-5">New Chat</div>
      </div>
    </div>
  );
}

export default UserMenu;
