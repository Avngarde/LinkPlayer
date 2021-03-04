import React, { useState } from 'react';
import * as Soundcloud from '../downloaders/Soundcloud';
import * as Youtube from '../downloaders/Youtube';


function AddNewSong(props) {
    const [newSongURL, setNewSongURL] = useState("");

    const addNewSong = (event) => {
        if (newSongURL.includes("soundcloud")) {
            let err = Soundcloud.downloadSoundCloudSong(newSongURL, "playlist");
            if (err != null) {
                alert("Something went wrong");
            } else {
                alert ("New song added succesfully");
            }
        } else if (newSongURL.includes("youtube")) {
            let err = Youtube.downloadYoutubeSong(newSongURL, "playlist");
            if (err != null) {
                alert("Something went wrong");
            } else {
                alert("Website added succesfully");
            }
        } else {
            alert("Website not supported!")
        }
    } 

    return (
        <form onSubmit={addNewSong} className="w-full text-center">
            <input onChange={e => setNewSongURL(e.target.value)} class="shadow appearance-none border rounded w-1/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3" id="username" type="text" placeholder="URL (Youtube, SoundCloud)"></input>
            <input value="Add new song" type="submit" class="bg-blue-500 hover:bg-blue-400 ml-1 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-3"></input>
        </form>
    )
}


export default AddNewSong;