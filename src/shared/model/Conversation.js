export class Conversation {
    type;
    name;
    description;
    isStarred;
}

export const ConversationType = {
    CHANNEL: 'CHANNEL',
    DIRECT_MESSAGE: 'DIRECT_MESSAGE'
}