// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin(user) {
    return user.userRole === 'ADMIN'
}

function getEmail(user) {
    return (user.firstName + '.' + user.lastName + '@codeimmersives.com').toLowerCase()
}

function getPlaylistLength(playlist) {
    return playlist.songs.length;
}

function getHardestHomework(homework) {
    let hardestWork = "";
    let lowest = 100;
    for (const item of homework){
    if (item.averageScore < lowest){
        hardestWork = item.name;
        lowest = item.averageScore;
        }
    }
    return hardestWork
}

function createPhonebook(name, number) {
    const phonebook = {};
    for (let i = 0; i < name.length; i++){
        phonebook [name[i]] = number[i];
    }
    return phonebook
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};