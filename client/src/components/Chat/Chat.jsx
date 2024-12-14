import React from "react";
import ChatHeader from "./ChatHeader";
import ChatContainer from "./ChatContainer";
import MessageBar from "./MessageBar";

function Chat() {
  return (
    <div className="border-1 m-2 rounded-xl bg-gradient-to-br from-orange-200 to-gray-50 flex flex-col  z-10">
    <ChatHeader />
    <ChatContainer />
    <MessageBar />    
    </div>
  )
}

export default Chat;
