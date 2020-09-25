import React, {useContext} from 'react';
import { ChatContext } from '../Context/ChatContext';

function ChatHeader() {
    const [chat] = useContext(ChatContext);
    
    return (
      <div className="chat__header">
       {chat}
      </div>
    );
  }
  
  export default ChatHeader;