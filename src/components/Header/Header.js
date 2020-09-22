import React from 'react';
import CurrentUser from './CurrentUser';
import Help from './Help';
import Search from './Search';
import History from './History';

function Header() {

    return (
      <div className="header">
       <History/>
       <Search/>
       <Help/>
       <CurrentUser/>
      </div>
    );
  }
  
  export default Header;