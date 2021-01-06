const youtube_downloader = require('youtube-mp3-downloader');
const ffmpeg = require('@ffmpeg-installer/ffmpeg');
const fs = require('fs');


function getYoutubeID(youtube_url) {
    return youtube_url.split('=')[1];
}

function checkIfSongsDirectoryExist() {
    fs.existsSync("../songs") ? null : fs.mkdirSync('../songs');
}

function downloadYoutubeSong(youtube_id) {
    checkIfSongsDirectoryExist();
    const YD = new youtube_downloader({
        "ffmpegPath": ffmpeg.path,
        "outputPath": "../songs",
        "youtubeVideoQuality": "highestaudio",
        "queueParallelism": 2,
        "progressTimeout": 2000,
        "allowWebm": true
    });

    YD.download(youtube_id);

    YD.on("finished", function(err, data) {
        console.log(JSON.stringify(data));
    });
     
    YD.on("error", function(error) {
        console.log(error);
    });
}

 
module.getYoutubeID = getYoutubeID;
module.downloadYoutubeSong = downloadYoutubeSong; 