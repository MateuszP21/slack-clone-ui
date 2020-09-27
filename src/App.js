import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import {componentDidMountLog} from './utils/log';

function App() {
  componentDidMountLog('APP');

  return (
    <div className="app">
      <Header/>
      <Chat/>
      <Sidebar/>
    </div>
  );
}

export default App;
