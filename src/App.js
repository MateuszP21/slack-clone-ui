import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';

function App() {
  return (
    <div className="app">
      <Header/>
      <Chat/>
      <Sidebar/>
    </div>
  );
}

export default App;
