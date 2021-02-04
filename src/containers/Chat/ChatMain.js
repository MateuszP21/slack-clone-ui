import React from 'react';
import { componentDidMountLog } from '../../utils/log';

function ChatMain() {
    componentDidMountLog('CHAT_MAIN');
    return (
        <div className="chat__main">
            main
        </div>
    )
}

export default ChatMain;