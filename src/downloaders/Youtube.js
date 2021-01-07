const youtube_downloader = require('youtube-mp3-downloader');
const ffmpeg = require('@ffmpeg-installer/ffmpeg');
const getMP3Duration = require('get-mp3-duration');
const fs = require('fs');
const json_functions = require('D:/LinkPlayer/boilerplate/electron-react-webpack-boilerplate/src/json_functions/json_functions.js');



function getYoutubeID(youtube_url) {
    return youtube_url.split('=')[1];
}

function getAudioFileDuration(file_path) {
    const buffer = fs.readFileSync(file_path);
    const miliseconds = getMP3Duration(buffer);
    let seconds = Math.round((miliseconds % 60000) / 1000);
    let minutes = Math.floor(miliseconds / (1000 * 60));
    return `${minutes}:${seconds}`;
}

function checkIfSongsDirectoryExist() {
    fs.existsSync("../songs") ? null : fs.mkdirSync('../songs');
}

function getSongInfo(data) {
    let song_info = {};
    song_info["title"] = data["title"];
    song_info["duration"] = getAudioFileDuration(data["file"]);
    song_info["path"] = data["file"];

    return song_info;
}

function downloadYoutubeSong(youtube_url, playlist_name) {
    if (json_functions.getPlaylist(playlist_name) != null) {
        checkIfSongsDirectoryExist();
        let id = getYoutubeID(youtube_url);
        const YD = new youtube_downloader({
            "ffmpegPath": `D:/LinkPlayer/boilerplate/electron-react-webpack-boilerplate/node_modules/@ffmpeg-installer/win32-x64/ffmpeg.exe`,
            "outputPath": "../songs",
            "youtubeVideoQuality": "highestaudio",
            "queueParallelism": 2,
            "progressTimeout": 2000,
            "allowWebm": true
        });
        YD.download(id);

        YD.on("finished", function(err, data) {
            let song_info = getSongInfo(data);
            json_functions.addSongToPlaylist(song_info, playlist_name);
        });
        
        YD.on("error", function(error) {
            return error;
        });
    }
}


module.downloadYoutubeSong = downloadYoutubeSong; 