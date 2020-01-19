let handlejson = require('./handlejson');
let yvi = require('youtube-info');


// Youtube
function get_id_from_youtube_link(link){
    return link.split("=")[1].replace('&t', '');
}

function YT_get_song_info(link){
    let video_id = get_id_from_youtube_link(link);
}

function YTadd_new_song(link){
    handlejson.write_song_to_file({
        url:get_id_from_youtube_link(link)
    });
}

YTadd_new_song('https://www.youtube.com/watch?v=Nh28z4Jt_zc');
YTadd_new_song('https://www.youtube.com/watch?v=PzNIeqTjkIk');
YTadd_new_song('https://www.youtube.com/watch?v=b4aPk_MZw_0')