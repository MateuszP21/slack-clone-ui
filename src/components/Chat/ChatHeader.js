import React, {useContext} from 'react';
import { ChatContext } from '../context/chat-context';
import {componentDidMountLog} from '../../utils/log';

function ChatHeader() {
  const chat = useContext(ChatContext);
  componentDidMountLog('CHAT_HEADER');

  return (
    <div className="chat__header">
      {chat?.name}
    </div>
  );
}
  
export default ChatHeader;