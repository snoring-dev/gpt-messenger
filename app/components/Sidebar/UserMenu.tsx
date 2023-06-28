import { MdOutlineLogout } from "react-icons/md";
import { RiDeleteBin6Line, RiUserStarFill } from "react-icons/ri";
import { GrSync } from "react-icons/gr";
import { HiPlus } from "react-icons/hi";

function UserMenu() {
  return (
    <div className="user-menu">
      <div className="user-menu-item">
        <MdOutlineLogout size={24} />
        <div className="font-semibold px-4 text-left text-dark-green">
          Log out
        </div>
      </div>
      <div className="user-menu-item">
        <RiDeleteBin6Line size={24} />
        <div className="font-semibold px-4 text-left text-dark-green">
          Delete all conversations
        </div>
      </div>
      <div className="user-menu-item">
        <RiUserStarFill size={24} />
        <div className="font-semibold px-4 text-left text-dark-green">
          Upgrade to plus
        </div>
      </div>
      <div className="user-menu-item">
        <GrSync size={24} />
        <div className="font-semibold px-4 text-left text-dark-green">
          Updates & FAQ
        </div>
      </div>

      {/* NEW MESSAGE BUTTON */}
      <div className="chat-btn">
        <HiPlus size={24} className="text-white" />
        <div className="font-semibold text-white text-l pl-5">New Chat</div>
      </div>
    </div>
  );
}

export default UserMenu;
