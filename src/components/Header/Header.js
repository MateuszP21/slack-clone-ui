import React from 'react';
import CurrentUser from './CurrentUser';
import Help from './Help';
import Search from './Search';
import History from './History';
import {componentDidMountLog} from '../../utils/log';

function Header() {
  componentDidMountLog('HEADER');

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