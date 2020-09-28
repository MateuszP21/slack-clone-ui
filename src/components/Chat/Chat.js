import React from 'react';
import ChatHeader from './ChatHeader';
import {componentDidMountLog} from '../../utils/log';
import ChatMain from './ChatMain';
import ChatFooter from './ChatFooter';

function Chat() {
  componentDidMountLog('CHAT');

    return (
      <div className="chat">
        <ChatHeader/>
        <ChatMain/>
        <ChatFooter/>
      </div>
    );
  }
  
  export default Chat;