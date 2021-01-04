let youtube_downloader = require('youtube-mp3-downloader');


function getYoutubeID(youtube_url) {
    return youtube_url.split('=')[1];
}

function downloadYoutubeSong(youtube_id) {
    let YD = new youtube_downloader({
        "ffmpegPath": "../important_files/ffmpeg.exe",
        "outputPath": "../../songs/",
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

downloadYoutubeSong(getYoutubeID("https://www.youtube.com/watch?v=TpZVSayW6OU"))

module.getYoutubeID = getYoutubeID;
module.downloadYoutubeSong = downloadYoutubeSong; 