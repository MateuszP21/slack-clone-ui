import React, {useContext} from 'react';
import {ChatContext} from '../Context/ChatContext';

function ListItem({title}) {
    const [,setChat] = useContext(ChatContext);
    
    console.log('ListItem rerender: ' + title)
    return (
      <div className="sidebar__list--item" onClick={() => setChat(title)}>
        {title}
      </div>
    );
}
  
export default ListItem;