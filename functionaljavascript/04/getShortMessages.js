module.exports = function getShortMessages(messages) {
    return messages.filter ( function (messageObject) {
        if ( messageObject.message.length < 50 ) {
            return messageObject.message;
        }
    }).map ( function (messageObject) {
        return messageObject.message;
    });
}

// わかりやすいように処理を分解した場合
// module.exports = function getShortMessages(messages) {
//     var underMessage = messages.filter ( function (messageObject) {
//         if ( messageObject.message.length < 50 ) {
//             return messageObject.message;
//         }
//     });
//     var result = underMessage.map ( function (messageObject) {
//         return messageObject.message;
//     });
//     return result;
// }
