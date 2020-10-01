import React, {useState, useContext, useMemo} from 'react';
import {IoMdArrowDropright, IoMdArrowDropdown} from 'react-icons/io';
import ListItem from './ListItem';
import {componentDidMountLog} from '../../utils/log';
import {ChatContext} from '../context/chat-context';

function displaySelectChatWhenNoExpand(chat, items) {
  const selectChat = items.find((item) => item.id === chat?.id);
  return selectChat ? <ListItem {...{conversation: selectChat, checked: true}}/> : <></>
}

function displayParticularExpandingIcon(expand) {
  return expand ? <IoMdArrowDropdown/> : <IoMdArrowDropright/>;
}

function displayListItems(chat, items, expand) {
  return expand 
    ? items.map((item, index) => <ListItem {...{conversation: item, checked: chat?.id === item.id}} key={index}/>) 
    : displaySelectChatWhenNoExpand(chat, items);
}

function List({items, title}) {
  const [expand, setExpand] = useState(false);
  const chat = useContext(ChatContext);
  const chatAndExpandCondition = !expand && chat;
  componentDidMountLog('LIST');

  return useMemo(() => (
    <div className="sidebar__list">
      <div>
        <span onClick={() => setExpand(!expand)} className="flex__center sidebar__list--container">
          <span className="flex__center">{displayParticularExpandingIcon(expand)}</span>
          <span className="sidebar__list--title flex__center">{title}</span>
        </span>
        {displayListItems(chat, items, expand)}
      </div>
    </div>
  ), [expand, chatAndExpandCondition, items, title]);
}
  
export default List;