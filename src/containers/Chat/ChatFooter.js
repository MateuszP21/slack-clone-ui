import React from 'react';
import { componentDidMountLog } from '../../utils/log';

function ChatFooter() {
    componentDidMountLog('CHAT_FOOTER');
    return (
        <div className="chat__footer">
            footer
        </div>
    )
}

export default ChatFooter;