const scdl = require('soundcloud-downloader').default;
const fs = require('fs');
const clientId = '7fd0268919164882f79c88e5953e0d9ab1f68ceb';
const json_functions = require('D:/LinkPlayer/boilerplate/electron-react-webpack-boilerplate/src/json_functions/json_functions.js');


function getAudioDuration(miliseconds) {
    let seconds = Math.round((miliseconds % 60000) / 1000);
    let minutes = Math.floor(miliseconds / (1000 * 60));
    return `${minutes}:${seconds}`;
}

function getSongInfo(info) {
    let song_info = {};
    song_info["title"] = info.user.username + info.title;
    song_info["duration"] = getAudioDuration(info.duration);
    song_info["path"] = `../songs/${info.user.username} - ${info.title}.mp3`;
    return song_info;
}

function downloadSoundCloudSong(url) {
    scdl.getInfo(url, clientId)
    .then(function(info){
        scdl.download(url, clientId).then(stream => stream.pipe(fs.createWriteStream(`../songs/${info.user.username} - ${info.title}.mp3`)));
        return getSongInfo(info);
    });
}

function createNewSong(url, playlist_name) {
    if (json_functions.getPlaylist(playlist_name) != null) {
        let song_info = downloadSoundCloudSong(url);
        json_functions.addSongToPlaylist(song_info, playlist_name);
    }
}

createNewSong("https://soundcloud.com/lilsvckrxd/rest-yo-soul", "playlist");
module.createNewSoundCloudSong = createNewSong;