import React from 'react';
import {RiArrowDropDownLine} from 'react-icons/ri';
import {BiMessageSquareEdit} from 'react-icons/bi';
import {componentDidMountLog} from '../../utils/log';

function SidebarHeader() {
    const title = 'Stacyjkowo';
    componentDidMountLog('SIDEBAR_HEADER');

    return (
      <div className="sidebar__header flex__center">
        <span className="flex__center text__wrap">{title}</span>
        <span className="sidebar__header--arrowicon flex__center"><RiArrowDropDownLine/></span>
        <span className="sidebar__header--messageicon flex__center"><BiMessageSquareEdit/></span> 
      </div>
    );
  }
  
  export default SidebarHeader;