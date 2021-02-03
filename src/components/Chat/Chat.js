import React from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader';
import {componentDidMountLog} from '../../utils/log';
import ChatMain from './ChatMain';
import ChatFooter from './ChatFooter';
import ChatInfo from './ChatInfo';

function Chat() {
  componentDidMountLog('CHAT');

    return (
      <div className="chat">
        <ChatHeader/>
        <ChatMain/>
        <ChatInfo/>
        <ChatFooter/>
      </div>
    );
  }
  
export default Chat;