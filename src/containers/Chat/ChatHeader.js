import React, {useContext} from 'react';
import { ChatContext } from '../context/chat-context';
import {componentDidMountLog} from '../../utils/log';
import {ConversationType} from '../../shared/model/Conversation';

function ChannelHeader({chat}) {
  componentDidMountLog('CHANNEL_HEADER');

  return (
    <>
      <span>{chat?.name}</span>
      <div className="chat__header--description">{chat?.description}</div>
    </>
  )
}

function DirectMessageHeader({chat}) {
  componentDidMountLog('DIRECT_MESSAGE_HEADER');

  return (
    <>
      <span>{chat?.name}</span>
    </>
  );
}

function ChatHeader() {
  const chat = useContext(ChatContext);
  componentDidMountLog('CHAT_HEADER');

  return (
    <div className="chat__header">
      {chat?.type === ConversationType.CHANNEL ? <ChannelHeader {...{chat}}/> : <DirectMessageHeader {...{chat}}/>}
    </div>
  );
}
  
export default ChatHeader;