import React from "react";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import MessageInput from "./MessageInput";

const ChatContainer = () => {
  return (
    <div className="flex flex-col h-full">
      <ChatHeader />
      <ChatBody />
      <MessageInput />
    </div>
  );
};

export default ChatContainer;
