import React, {useState} from 'react';
import {IoMdArrowDropright, IoMdArrowDropdown} from 'react-icons/io';
import ListItem from './ListItem';
import {componentDidMountLog} from '../../utils/log';

function List({items, title}) {
  const [expand, setExpand] = useState(false);
  componentDidMountLog('LIST');

  return (
    <div className="sidebar__list">
        <div>
          <span onClick={() => setExpand(!expand)} className="flex__center sidebar__list--container">
              <span className="flex__center">{expand ? <IoMdArrowDropdown/> : <IoMdArrowDropright/>}</span>
              <span className="sidebar__list--title flex__center">{title}</span>
          </span>
          {expand ? items.map((item, index) => <ListItem {...{conversation: item}} key={index}/>) : <></>}
        </div>
    </div>
  );
}
  
export default List;