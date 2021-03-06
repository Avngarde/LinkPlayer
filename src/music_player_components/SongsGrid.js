import React from 'react';
import Song from './Song';
import * as json_functions from '../json_functions/json_functions';


function SongsGrid(props) {
    let playlist_songs = json_functions.getPlaylist(props.playlist_name)["songs"];
    let songs = [];

    if (props.play_song) {
        playlist_songs.forEach((song => {
            let song_component = <Song title={song.title} playlist_name={props.playlist_name} filename={song.filename} duration={song.duration} edit_mode={props.edit_mode} play_song={props.play_song} />
            songs.push(song_component);
        }));
    } else {
        playlist_songs.forEach((song => {
            let song_component = <Song title={song.title} playlist_name={props.playlist_name} filename={song.filename} duration={song.duration} edit_mode={props.edit_mode} />
            songs.push(song_component);
        })); 
    } 


    return (
        <div className="songs_grid w-full overflow-y-auto bg-gray-800 p-4">
            {songs}
        </div>
    )
}


export default SongsGrid;