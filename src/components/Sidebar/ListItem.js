import React, {useContext} from 'react';
import {DispatchChatContext} from '../context/chat-context';
import {componentDidMountLog} from '../../utils/log';

function ListItem({conversation}) {
    const setChat = useContext(DispatchChatContext);
    componentDidMountLog(`LIST_ITEM ${conversation.name}`);

    return (
      <div className="sidebar__list--item" onClick={() => setChat(conversation)}>
        {conversation.name}
      </div>
    );
}
  
export default ListItem;