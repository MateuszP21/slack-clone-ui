import React from 'react';
import {IoMdArrowDropright, IoMdArrowDropdown} from 'react-icons/io';
import ListItem from './ListItem';

function List({items, title}) {
    const [expand, setExpand] = React.useState(false);
    console.log("List render");
    return (
      <div className="sidebar__list">
          <div>
            <span onClick={() => setExpand(!expand)}>
                <span>{expand ? <IoMdArrowDropdown/> : <IoMdArrowDropright/>}</span>
                {title}
            </span>
            {expand ? items.map((item, index) => <ListItem {...{title: item}} key={index}/>) : <></>}
          </div>
      </div>
    );
  }
  
  export default List;