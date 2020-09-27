import React, {useContext} from 'react';
import { ChatContext } from '../context/chat-context';

function ChatHeader() {
    const chat = useContext(ChatContext);
    console.log("ChatHeader rerender");
    return (
      <div className="chat__header">
       {chat}
      </div>
    );
  }
  
  export default ChatHeader;