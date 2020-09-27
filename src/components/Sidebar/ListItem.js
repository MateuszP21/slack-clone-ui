import React, {useContext} from 'react';
import {DispatchChatContext} from '../context/chat-context';

function ListItem({title}) {
    const setChat = useContext(DispatchChatContext);
    
    console.log('ListItem rerender: ' + title)
    return (
      <div className="sidebar__list--item" onClick={() => setChat(title)}>
        {title}
      </div>
    );
}
  
export default ListItem;