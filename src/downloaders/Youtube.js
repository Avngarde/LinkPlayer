const youtube_downloader = require('youtube-mp3-downloader');
const getMP3Duration = require('get-mp3-duration');
const fs = require('fs');
const json_functions = require('../json_functions/json_functions');


function getYoutubeID(youtube_url) {
    return youtube_url.split('=')[1];
}

function createFilename(videoTitle) {
    let filename = videoTitle.split(" ").join("");
    for (let char in filename) {
        if (!(/^[a-zA-Z()]+$/.test(char))) {
            filename.replace(char, "");
        }
    }
    return filename;
}

function changeMP3FileName(originalSongName, changedSongName) {
    fs.rename('src/songs/'+originalSongName+'.mp3', 'src/songs/'+changedSongName+'.mp3', function(err) {
        if (err) alert(err);
    });
}

function getAudioFileDuration(file_path) {
    const buffer = fs.readFileSync(file_path);
    const miliseconds = getMP3Duration(buffer);
    let seconds = Math.round((miliseconds % 60000) / 1000);
    let minutes = Math.floor(miliseconds / (1000 * 60));
    return `${minutes}:${seconds}`;
}

function checkIfSongsDirectoryExist() {
    fs.existsSync("src/songs") ? null : fs.mkdirSync('src/songs');
}

function getSongInfo(data) {
    let song_info = {};
    song_info["title"] = data["videoTitle"];
    song_info["duration"] = getAudioFileDuration(data["file"]);
    song_info["filename"] = createFilename(data["videoTitle"]);
    changeMP3FileName(song_info["title"], song_info["filename"]); // Change the name of mp3 file after being downloaded

    return song_info;
}

function downloadYoutubeSong(youtube_url, playlist_name) {
    if (json_functions.getPlaylist(playlist_name) != null) {
        checkIfSongsDirectoryExist();
        let id = getYoutubeID(youtube_url);
        const YD = new youtube_downloader({
            "ffmpegPath": "src/important_files/ffmpeg.exe",
            "outputPath": "src/songs",
            "youtubeVideoQuality": "lowestaudio",
            "queueParallelism": 2,
            "progressTimeout": 2000,
            "allowWebm": true
        });


        YD.download(id);

        YD.on("finished", function(err, data) {
            let song_info = getSongInfo(data);
            json_functions.addSongToPlaylist(song_info, playlist_name);
            alert("New song successfully added");
            window.location.reload();
        });
         
        YD.on("error", function(error) {
            console.log(error);
        });

    }
}

exports.downloadYoutubeSong = downloadYoutubeSong;