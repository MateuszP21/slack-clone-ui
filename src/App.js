import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
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
