import React from 'react';
import './App.scss';
import Header from './containers/Header/Header';
import Sidebar from './containers/Sidebar/Sidebar';
import Chat from './containers/Chat/Chat';
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
