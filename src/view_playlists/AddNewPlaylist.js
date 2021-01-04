import React, { useState } from 'react';
import * as json_functions from '../json_functions/json_functions';


function AddNewPlaylist(props) {
    const [newPlaylistName, setNewPlaylistName] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        json_functions.addNewPlaylist(
            {"name" : newPlaylistName, songs: []}
        );
        
        props.updatePlaylistList();
        alert("Playlist added succesfully");
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <div className="w-full text-center">
                <input value={newPlaylistName} onChange={e => setNewPlaylistName(e.target.value)} class="shadow appearance-none border rounded w-6/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3" id="username" type="text" placeholder="Playlist name"></input>
                <input type="submit" value="Add new playlist" class="bg-blue-500 hover:bg-blue-400 ml-1 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-3" />
            </div>
        </form>
    )
}


export default AddNewPlaylist;