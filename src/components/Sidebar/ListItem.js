import React, {useContext} from 'react';
import {DispatchChatContext} from '../context/chat-context';
import {componentDidMountLog} from '../../utils/log';

function ListItem({conversation, checked}) {
    const setChat = useContext(DispatchChatContext);
    componentDidMountLog(`LIST_ITEM ${conversation.name}`);

    return (
      <>
        <input className="sidebar__listitem--input" id={`listitem-${conversation.id}`} type="radio" name="listitem--conversation" defaultChecked={checked}/>
        <label className="sidebar__listitem--label" htmlFor={`listitem-${conversation.id}`} onClick={() => setChat(conversation)}>{conversation.name}</label>
      </>
    );
}
  
export default ListItem;