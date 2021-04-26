import React, { useState } from 'react';
import * as Soundcloud from '../downloaders/Soundcloud';
import * as Youtube from '../downloaders/Youtube';
import { css } from "@emotion/core";
import PropagateLoader from "react-spinners/PropagateLoader";


function AddNewSong(props) {
    const [newSongURL, setNewSongURL] = useState("");
    const [loadScreen, setloadScreen] = useState(false);

    const override = css`
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-color: red;
        height: 100vh;
        position: fixed;
        top: 0;
        width:100%;
    `;

    const addNewSong = (event) => {
        if (newSongURL.includes("soundcloud")) {
            setloadScreen(true);
            Soundcloud.downloadSoundCloudSong(newSongURL, props.playlist_name);
        } else if (newSongURL.includes("youtube")) {
            setloadScreen(true);
            Youtube.downloadYoutubeSong(newSongURL, props.playlist_name);
        } else {
            alert("Website not supported!")
        }
    } 

    return (
        <form onSubmit={addNewSong} className="w-full text-center">
            <PropagateLoader color={"#1d211e"} css={override} loading={loadScreen} size={35} />
            <input onChange={e => {setNewSongURL(e.target.value)}} className="shadow appearance-none border rounded w-1/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3" id="username" type="text" placeholder="URL (Youtube, SoundCloud)"></input>
            <input value="Add new song" type="submit" className="bg-blue-500 hover:bg-blue-400 ml-1 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-3"></input>
        </form>
    )
}


export default AddNewSong;