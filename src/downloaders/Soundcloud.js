const scdl = require('soundcloud-downloader').default;
const fs = require('fs');
const clientId = '7fd0268919164882f79c88e5953e0d9ab1f68ceb';
const json_functions = require('../json_functions/json_functions.js');


function getAudioDuration(miliseconds) {
    let seconds = Math.round((miliseconds % 60000) / 1000);
    let minutes = Math.floor(miliseconds / (1000 * 60));
    return `${minutes}:${seconds}`;
}

function checkIfSongsDirectoryExist() {
    fs.existsSync("src/songs") ? null : fs.mkdirSync('src/songs');
}

function getSongInfo(info) {
    let song_info = {};
    song_info["title"] = info.user.username + " - " + info.title;
    song_info["duration"] = getAudioDuration(info.duration);
    return song_info;
}

function downloadSoundCloudSong(url, playlist_name) {
    try {
    checkIfSongsDirectoryExist();
    scdl.getInfo(url, clientId)
    .then(function(info){
        scdl.download(url, clientId).then(stream => {
            stream.pipe(fs.createWriteStream(`src/songs/${info.user.username} - ${info.title}.mp3`));
            alert("New song successfully added");
            window.location.reload();
        });
        let song_info = getSongInfo(info);
        json_functions.addSongToPlaylist(song_info, playlist_name);
    });
    } catch (e) {
        return "error";
    }
}

exports.downloadSoundCloudSong = downloadSoundCloudSong;