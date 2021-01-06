const scdl = require('soundcloud-downloader').default;
const fs = require('fs');
const clientId = '7fd0268919164882f79c88e5953e0d9ab1f68ceb';


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
        scdl.download(url, clientId).then(stream => stream.pipe(fs.createWriteStream(`../songs/${info.user.username} - ${info.title}.mp3`)));
    });
}

function createNewSong(url, playlist_name) {
    
}


module.createNewSoundCloudSong = createNewSong;