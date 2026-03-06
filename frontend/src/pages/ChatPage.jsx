import React from "react";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import ProfileHeader from "../components/ProfileHeader";
import ActiveTabSwitch from "../components/ActiveTabSwitch";
import ChatsList from "../components/ChatsList";
import ContactList from "../components/ContactList";
import ChatContainer from "../components/ChatContainer";
import NoConversationPlaceholder from "../components/NoConversationPlaceholder";
import { useChatStore } from "../store/useChatStore";
import Navbar from "../components/Navbar";

const ChatPage = () => {
  const { activeTab, selectedUser } = useChatStore();

  return (
    <div className="relative w-full max-w-6xl mx-auto py-6 h-[90vh]">
      <BorderAnimatedContainer>
        <div className="flex flex-col h-full w-full">
          {/* MOBILE NAVBAR */}
          <Navbar />

          <div className="flex w-full flex-1 overflow-hidden">
            {/* SIDEBAR (DESKTOP ONLY) */}
            <div className="hidden md:flex w-80 bg-slate-800/50 backdrop-blur-sm flex-col border-r border-slate-700/40 h-full">
              {/* FIXED HEADER */}
              <div className="flex-shrink-0 border-b border-slate-700/40">
                <ProfileHeader />
                <ActiveTabSwitch />
              </div>

              {/* SCROLLABLE LIST */}
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {activeTab === "chats" ? <ChatsList /> : <ContactList />}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex-1 flex flex-col bg-slate-900/50 backdrop-blur-sm overflow-hidden">
              {/* MOBILE VIEW */}
              <div className="md:hidden h-full overflow-y-auto">
                {selectedUser ? (
                  <ChatContainer />
                ) : activeTab === "chats" ? (
                  <ChatsList />
                ) : (
                  <ContactList />
                )}
              </div>

              {/* DESKTOP VIEW */}
              <div className="hidden md:flex flex-col h-full">
                {selectedUser ? (
                  <ChatContainer />
                ) : (
                  <NoConversationPlaceholder />
                )}
              </div>
            </div>
          </div>
        </div>
      </BorderAnimatedContainer>
    </div>
  );
};

export default ChatPage;
