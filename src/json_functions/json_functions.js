const fs = require('fs');

function readPlaylistsFile(){
    const raw_json = fs.readFileSync('./src//important_files/playlists.json', 'utf8');
    return raw_json;
}

function writePlaylistsFile(raw_json) {
    fs.writeFileSync('./src/important_files/playlists.json', raw_json, 'utf-8');
}

function deserializeJSON(raw_json) {
    return JSON.parse(raw_json);
}

function getAllPlaylists() {
    const raw_playlists = readPlaylistsFile();
    let playlists = deserializeJSON(raw_playlists);
    return playlists.playlists;
}

function getPlaylist(playlist_title) {
    const raw_playlists = readPlaylistsFile();
    let playlists = deserializeJSON(raw_playlists);
    let playlist_to_return;
    playlists.playlists.forEach(playlist => {
        if (playlist.name === playlist_title) {
            playlist_to_return = playlist;
        }
    });
    if (playlist_to_return != null) {
        return playlist_to_return;
    }
}

function addNewPlaylist(playlist) {
    const raw_playlists = readPlaylistsFile();
    let playlists = deserializeJSON(raw_playlists);
    playlists.playlists.push(playlist);
    let stringified_playlists = JSON.stringify(playlists, null, 4); // null and 4 are for pretty printing json in file
    writePlaylistsFile(stringified_playlists);
}

function deletePlaylist(playlist_title) {
    const raw_playlists = readPlaylistsFile();
    let playlists = deserializeJSON(raw_playlists);
    playlists.playlists.forEach(playlist => {
        if (playlist.name === playlist_title) {
            let playlist_idx = playlists.playlists.indexOf(playlist);
            playlists.playlists.splice(playlist_idx, 1);
        }
    })
    let stringified_playlists = JSON.stringify(playlists, null, 4); // null and 4 are for pretty printing json in file
    writePlaylistsFile(stringified_playlists);
}


function addSongToPlaylist(song, playlist_title) {
    const raw_playlists = readPlaylistsFile();
    let playlists = deserializeJSON(raw_playlists);
    playlists.playlists.forEach(playlist => {
        if (playlist.name === playlist_title) {
            playlist["songs"].push(song);
        }
    });
    let stringified_playlists = JSON.stringify(playlists, null, 4); // null and 4 are for pretty printing json in file
    writePlaylistsFile(stringified_playlists);
}

function deleteSongFromPlaylist(song_title, playlist_title) {
    const raw_playlists = readPlaylistsFile();
    let playlists = deserializeJSON(raw_playlists);
    playlists.playlists.forEach(playlist => {
        if (playlist.name === playlist_title) {
            playlist.songs.forEach(song => {
                if (song.title === song_title) {
                    let song_idx = playlist.songs.indexOf(song);
                    playlist.songs.splice(song_idx, 1);
                }
            })
        }
    })
    let stringified_playlists = JSON.stringify(playlists, null, 4); // null and 4 are for pretty printing json in file
    writePlaylistsFile(stringified_playlists);
}


exports.getAllPlaylists = getAllPlaylists;
exports.getPlaylist = getPlaylist;
exports.addNewPlaylist = addNewPlaylist;
exports.deletePlaylist = deletePlaylist;
exports.addSongToPlaylist = addSongToPlaylist;
exports.deleteSongFromPlaylist = deleteSongFromPlaylist;