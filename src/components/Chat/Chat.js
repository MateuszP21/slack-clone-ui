import React from 'react';
import ChatHeader from './ChatHeader';
import {componentDidMountLog} from '../../utils/log';

function Chat() {
  componentDidMountLog('CHAT');

    return (
      <div className="chat">
        <ChatHeader/>
        Chat
      </div>
    );
  }
  
  export default Chat;