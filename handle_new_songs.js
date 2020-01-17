let fetchVideoInfo = require('youtube-info');
let handlejson = require('./handlejson');


// Youtube
function get_id_from_youtube_link(link){
    return link.split("=")[1];
}

function YT_get_song_info(link){
    let url = get_id_from_youtube_link(link);
    var fetchVideoInfo = require('youtube-info');
    fetchVideoInfo(url, function (err, videoInfo) {
        if (err) throw new Error(err);
        let x = videoInfo;
        return(x);
    });
}

function YTadd_new_song(link){
    let song_info = YT_get_song_info(link);
    handlejson.write_song_to_file({
       thumbnail: song_info.thumbnailUrl,
       duration: song_info.duration/60,
       title: song_info.title,
       songID: song_info.videoId,
       url: song_info.url,
    });
}

console.log(YT_get_song_info('https://www.youtube.com/watch?v=2ap4mq6YUwE'));