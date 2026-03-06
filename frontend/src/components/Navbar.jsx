import { MessageCircle, Users, Settings, LogOut } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
  const { activeTab, setActiveTab } = useChatStore();
  const { logout, authUser } = useAuthStore();

  return (
    <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-slate-700 bg-slate-900">
      {/* profile avatar */}
      <div className="flex items-center gap-2">
        <div className="avatar online">
          <div className="w-9 rounded-full border border-slate-700">
            <img
              src={authUser?.profilePic || "/avatar.png"}
              alt={authUser?.fullName}
            />
          </div>
        </div>
        <p className="text-xs">{authUser.fullName}</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6">
        {/* Chats */}
        <button
          onClick={() => setActiveTab("chats")}
          className={`flex items-center gap-1 text-sm ${
            activeTab === "chats" ? "text-blue-400" : "text-slate-400"
          }`}
        >
          <MessageCircle size={18} />
          Chats
        </button>

        {/* Contacts */}
        <button
          onClick={() => setActiveTab("contacts")}
          className={`flex items-center gap-1 text-sm ${
            activeTab === "contacts" ? "text-blue-400" : "text-slate-400"
          }`}
        >
          <Users size={18} />
          Contacts
        </button>

        {/* Settings */}
        <button className="text-slate-400" onClick={() => logout()}>
          <LogOut size={18} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
