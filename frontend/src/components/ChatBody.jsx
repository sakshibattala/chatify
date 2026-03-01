import React, { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import MessagesLoadingSkeleton from "./MessagesLoadingSkeleton";
import NoChatHistoryPlaceholder from "./NoChatHistoryPlaceholder";

const ChatBody = () => {
  const { messages, getMessagesByUserId, selectedUser, isMessagesLoading } =
    useChatStore();
  const { authUser } = useAuthStore();

  useEffect(() => {
    getMessagesByUserId(selectedUser);
  }, [selectedUser]);

  return (
    <div className="flex-1 px-6 overflow-y-auto py-8">
      {messages.length > 0 && !isMessagesLoading ? (
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className={`chat ${msg.senderId === authUser._id ? "chat-end" : "chat-start"}`}
            >
              <div
                className={`chat-bubble relative ${
                  msg.senderId === authUser._id
                    ? "bg-cyan-600 text-white"
                    : "bg-slate-800 text-slate-200"
                }`}
              >
                {/* if msg is image  */}
                {msg.image && (
                  <img
                    src={msg.image}
                    alt="shared"
                    className="rounded-lg h-48 object-cover"
                  />
                )}

                {/* if msg is chat */}
                {msg.text && <p className="mt-2">{msg.text}</p>}
                {/* timestamps  */}
                <p className="text-xs mt-1 opacity-75 flex items-center gap-1">
                  {new Date(msg.createdAt).toISOString().slice(11, 16)}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : isMessagesLoading ? (
        <MessagesLoadingSkeleton />
      ) : (
        <NoChatHistoryPlaceholder />
      )}
    </div>
  );
};

export default ChatBody;
