var getShortMessages = require('./getShortMessages.js');

var messageList = [
    { message : 'abcdefghijklmnopqrstuvwxyz' },
    { message : 'abcdefghijklmnopqrstuvwxyz1234567890' },
    { message : 'abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz' },
];

console.log(getShortMessages(messageList));
