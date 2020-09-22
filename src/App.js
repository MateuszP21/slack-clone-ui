import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';

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
