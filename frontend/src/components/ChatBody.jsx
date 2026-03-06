import React, { useEffect, useRef } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import MessagesLoadingSkeleton from "./MessagesLoadingSkeleton";
import NoChatHistoryPlaceholder from "./NoChatHistoryPlaceholder";

const ChatBody = () => {
  const {
    messages,
    getMessagesByUserId,
    selectedUser,
    isMessagesLoading,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();

  const { authUser } = useAuthStore();

  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessagesByUserId(selectedUser);
    subscribeToMessages();

    return () => unsubscribeFromMessages();
  }, [selectedUser]);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-4 md:px-6 py-6">
      
      {messages.length > 0 && !isMessagesLoading ? (
        <div className="max-w-3xl mx-auto flex flex-col gap-4">

          {messages.map((msg) => (
            <div
              key={msg._id}
              className={`flex ${
                msg.senderId === authUser._id
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] rounded-xl px-4 py-2 break-words shadow-sm ${
                  msg.senderId === authUser._id
                    ? "bg-cyan-600 text-white"
                    : "bg-slate-800 text-slate-200"
                }`}
              >
                {/* Image message */}
                {msg.image && (
                  <img
                    src={msg.image}
                    alt="shared"
                    className="rounded-lg mb-2 max-h-60 object-cover"
                  />
                )}

                {/* Text message */}
                {msg.text && <p>{msg.text}</p>}

                {/* Timestamp */}
                <p className="text-[11px] mt-1 opacity-70">
                  {new Date(msg.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}

          {/* Scroll anchor */}
          <div ref={messageEndRef}></div>
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