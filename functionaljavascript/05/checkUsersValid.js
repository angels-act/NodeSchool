module.exports = function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every( function checkUsers ( submittedUser ) {
            return goodUsers.some( function checkUser ( goodUser ) {
                return (goodUser['id'] === submittedUser['id']);
            });
        });
    };
}
