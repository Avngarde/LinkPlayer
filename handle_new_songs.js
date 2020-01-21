let handlejson = require('./handlejson');
let yvi = require('youtube-info');


// Youtube
function get_id_from_youtube_link(link){
    return link.split("=")[1].replace('&t', '');
}

function YT_get_song_info(link){
    let video_id = get_id_from_youtube_link(link);
    return video_id
}

function YTadd_new_song(link){
    handlejson.write_song_to_file({
        url:get_id_from_youtube_link(link)
    });
}

exports.get_id_from_youtube_link = function(link){
    return link.split("=")[1].replace('&t', '');
}

exports.YT_get_song_info = function(link){
    let video_id = get_id_from_youtube_link(link);
}

exports.YTadd_new_song = function(link){
  handlejson.write_song_to_file({
      url:get_id_from_youtube_link(link)
  });
}
