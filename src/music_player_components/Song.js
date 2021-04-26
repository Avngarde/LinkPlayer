import React from 'react';
import * as json_functions from '../json_functions/json_functions';
const fs = require('fs');


function Song(props) {
    const deleteSong = (song_title, song_filename, playlist_name) => {
        fs.unlinkSync("src/songs/" + song_filename + ".mp3");  //Delete song file
        json_functions.deleteSongFromPlaylist(song_title, playlist_name);
        alert("Song deleted successfully");
        window.location.reload();
    }

    if (props.edit_mode === false){
        return (
            <div className="text-center bg-gray-900 rounded text-gray-200 flex p-3 w-full mt-2 mb-4">
                <div className="mt-2 overflow-visible w-3/5 inline truncate text-sm">
                    {props.title}
                </div>

                <div className="mt-2 w-3/4 text-sm">
                    {props.duration}
                </div>

                <button onClick={() => props.play_song(props.filename)} className="align-middle text-sm bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded mr-3">
                    play
                </button>
            </div>
        )
    } else {
        return (
            <div className="text-center bg-gray-900 rounded text-gray-200 flex p-3 w-full mt-2 mb-4">
                <div className="mt-2 overflow-visible w-4/5 inline truncate text-sm">
                    {props.title}
                </div>

                <div className="mt-2 w-3/4 text-sm">
                    {props.duration}
                </div>

                <button onClick={() => deleteSong(props.title, props.filename, props.playlist_name)} className="align-middle text-sm bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                    delete
                </button>
            </div>
        )
    }
}


export default Song;