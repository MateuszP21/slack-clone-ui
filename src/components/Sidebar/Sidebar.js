import React from 'react';
import SidebarHeader from './SidebarHeader';
import List from './List';

function Sidebar() {
  console.log('Sidebar rerender')
    return (
      <div className="sidebar">
        <SidebarHeader/>
          <List key={1} {...{items: ["MPO", "tasks"], title: "Starred"}}/>
          <List key={2} {...{items: ["books", "tasks", "general", "muzyka", "test"], title: "Channels"}}/>
          <List key={3} {...{items: ["MPO", "Danv", "Dżasta"], title: "Direct Messages"}}/>
      </div>
    );
  }
  
  export default Sidebar;