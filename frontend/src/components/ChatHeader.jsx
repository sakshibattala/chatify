import React from "react";
import { useChatStore } from "../store/useChatStore";
import { XIcon } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  const isOnline = onlineUsers.includes(selectedUser._id);

  return (
    <div className="sticky top-0 z-20 flex items-center justify-between px-4 md:px-6 py-3 bg-slate-900/90 backdrop-blur border-b border-slate-700 shadow-sm">
      {/* Avatar + name */}
      <div className="flex items-center gap-3 min-w-0">
        <div className={`avatar ${isOnline ? "online" : "offline"}`}>
          <div className="w-10 md:w-12 rounded-full">
            <img
              src={selectedUser.profilePic || "/avatar.png"}
              alt={selectedUser.fullName}
            />
          </div>
        </div>

        <div className="truncate">
          <h3 className="text-slate-200 font-medium truncate">
            {selectedUser.fullName}
          </h3>

          <p className="text-xs text-slate-400">
            {isOnline ? "Online" : "Offline"}
          </p>
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={() => setSelectedUser(null)}
        className="p-2 rounded-lg hover:bg-slate-800 transition"
      >
        <XIcon className="w-5 h-5 text-slate-400 hover:text-white" />
      </button>
    </div>
  );
};

export default ChatHeader;
