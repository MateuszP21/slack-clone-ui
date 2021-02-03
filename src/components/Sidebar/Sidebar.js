import React from 'react';
import './Sidebar.scss';
import SidebarHeader from './SidebarHeader';
import List from './List';
import { ConversationType } from '../../shared/model/Conversation';
import {componentDidMountLog} from '../../utils/log';
import SimpleBar from 'simplebar-react';

const starred = [
  {id: 1, type: ConversationType.DIRECT_MESSAGE, name: 'MPO'},
  {id: 2, type: ConversationType.DIRECT_MESSAGE, name: 'Dżasta'}
];

const channels = [
  {id: 3, type: ConversationType.CHANNEL, name: 'general', description: 'Company-wide announcements and work-based matters'},
  {id: 4, type: ConversationType.CHANNEL, name: 'books', description: 'Super books topic'},
  {id: 5, type: ConversationType.CHANNEL, name: 'tasks', description: 'Tasks group channel'},
  {id: 6, type: ConversationType.CHANNEL, name: 'test channel with very long name', description: ''}
];

const dms = [
  {id: 7, type: ConversationType.DIRECT_MESSAGE, name: 'MPO'},
  {id: 8, type: ConversationType.DIRECT_MESSAGE, name: 'Danv'},
  {id: 9, type: ConversationType.DIRECT_MESSAGE, name: 'Dżasta'}
];


function Sidebar() {
  componentDidMountLog('SIDEBAR');

  return (
    <div className="sidebar">
        <SidebarHeader/>
        <SimpleBar style={{height: `calc(100vh - 6.5rem)`}}>
          <List key={1} {...{items: starred, title: "Starred"}}/>
          <List key={2} {...{items: channels, title: "Channels"}}/>
          <List key={3} {...{items: dms, title: "Direct Messages"}}/>      
        </SimpleBar>
    </div>
  );
}
  
export default Sidebar;