const scdl = require('soundcloud-downloader').default;
const fs = require('fs');
const clientId = '7fd0268919164882f79c88e5953e0d9ab1f68ceb';
const json_functions = require('D:/LinkPlayer/boilerplate/electron-react-webpack-boilerplate/src/json_functions/json_functions.js');


function getAudioDuration(miliseconds) {
    let seconds = Math.round((miliseconds % 60000) / 1000);
    let minutes = Math.floor(miliseconds / (1000 * 60));
    return `${minutes}:${seconds}`;
}

function checkIfSongsDirectoryExist() {
    fs.existsSync("./songs") ? null : fs.mkdirSync('./songs');
}

function getSongInfo(info) {
    let song_info = {};
    song_info["title"] = info.user.username + " - " + info.title;
    song_info["duration"] = getAudioDuration(info.duration);
    song_info["path"] = `./songs/${info.user.username} - ${info.title}.mp3`;
    return song_info;
}

function downloadSoundCloudSong(url, playlist_name) {
    try {
    checkIfSongsDirectoryExist();
    scdl.getInfo(url, clientId)
    .then(function(info){
        scdl.download(url, clientId).then(stream => {
            stream.pipe(fs.createWriteStream(`./songs/${info.user.username} - ${info.title}.mp3`));
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