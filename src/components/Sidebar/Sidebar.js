import React from 'react';
import SidebarHeader from './SidebarHeader';
import List from './List';

function Sidebar() {
  console.log('Sidebar rerender')
    return (
      <div className="sidebar">
       <SidebarHeader/>
       <List {...{items: ["books", "tasks", "general", "muzyka", "test"], title: "Starred"}}/>
       <List {...{items: ["books", "tasks", "general", "muzyka", "test"], title: "Channels"}}/>
       <List {...{items: ["books", "tasks", "general", "muzyka", "test"], title: "Direct Messages"}}/>
      </div>
    );
  }
  
  export default Sidebar;