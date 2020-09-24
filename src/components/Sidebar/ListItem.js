import React from 'react';

function ListItem({title}) {
    console.log('ListItem rerender')
    return (
      <div className="sidebar__list--item">
        {title}
      </div>
    );
}
  
export default ListItem;