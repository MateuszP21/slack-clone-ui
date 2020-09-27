import React from 'react';
import SidebarHeader from './SidebarHeader';
import List from './List';
import { ConversationType } from '../../shared/model/Conversation';
import {componentDidMountLog} from '../../utils/log';

const starred = [
  {type: ConversationType.DIRECT_MESSAGE, name: 'MPO'},
  {type: ConversationType.DIRECT_MESSAGE, name: 'Dżasta'}
];

const channels = [
  {type: ConversationType.CHANNEL, name: 'general', description: 'Company-wide announcements and work-based matters'},
  {type: ConversationType.CHANNEL, name: 'books', description: 'Super books topic'},
  {type: ConversationType.CHANNEL, name: 'tasks', description: 'Tasks group channel'},
  {type: ConversationType.CHANNEL, name: 'test', description: ''}
];

const dms = [
  {type: ConversationType.DIRECT_MESSAGE, name: 'MPO'},
  {type: ConversationType.DIRECT_MESSAGE, name: 'Danv'},
  {type: ConversationType.DIRECT_MESSAGE, name: 'Dżasta'}
];


function Sidebar() {
  componentDidMountLog('SIDEBAR');

  return (
    <div className="sidebar">
      <SidebarHeader/>
        <List key={1} {...{items: starred, title: "Starred"}}/>
        <List key={2} {...{items: channels, title: "Channels"}}/>
        <List key={3} {...{items: dms, title: "Direct Messages"}}/>
    </div>
  );
}
  
export default Sidebar;