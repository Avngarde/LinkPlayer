const scdl = require('soundcloud-downloader');
const fs = require('fs');
const clientId = 'koSuixzk25Cz0fDgsPfhkgeZcKBr7lpQ';



function getAudioDuration(miliseconds) {
    let seconds = Math.round((miliseconds % 60000) / 1000);
    let minutes = Math.floor(miliseconds / (1000 * 60));
    return `${minutes}:${seconds}`;
}

function getSoundCloudSongInfo(info) {
    let song_info = {};
    song_info["artist"] = info.user.username;
    song_info["title"] = info.title;
    song_info["duration"] = getAudioDuration(info.duration);
    return song_info;
}

function downloadSoundCloudSong(url) {
    return scdl.getInfo(url, clientId)
    .then(function(info){
        console.log(getSoundCloudSongInfo(info));
        scdl.download(url, clientId).then(stream => stream.pipe(fs.createWriteStream(`../../songs/${info.user.username} - ${info.title}.mp3`)));
    });
}

function createNewSong(url) {
    // TODO
}


downloadSoundCloudSong("https://soundcloud.com/42dugg/not-a-rapper-feat-lil-baby-yo-gotti")
module.createNewSoundCloudSong = createNewSong;