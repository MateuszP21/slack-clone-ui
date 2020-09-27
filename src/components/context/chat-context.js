import React, { useState, createContext } from "react";

export const ChatContext = createContext();
export const DispatchChatContext = React.createContext();

export const ChatContextProvider = props => {
  const [chat, setChat] = useState(null);

  return (
    <DispatchChatContext.Provider value={setChat}>
      <ChatContext.Provider value={chat}>
        {props.children}
      </ChatContext.Provider>
    </DispatchChatContext.Provider>
  );
};
