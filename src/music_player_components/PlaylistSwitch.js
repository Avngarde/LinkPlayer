import React, { useState }  from 'react';
import Prompt from '../base_components/Prompt';
import AddNewPlaylist from '../view_playlists/AddNewPlaylist';
import * as json_functions from '../json_functions/json_functions';


function PlaylistSwitch(props) {
    const getPlaylists = () => {
        const allPlaylists = json_functions.getAllPlaylists();
        const playlistsOptions = allPlaylists == 0 ? [<option value="None">None</option>] : [];
        allPlaylists.forEach(playlist => {
            playlistsOptions.push(<option value={playlist.name}>{playlist.name}</option>);
        });

        return playlistsOptions;
    }

    const [playlistsList, setPlaylistsList] = useState(getPlaylists());
    const [addNewPlaylistFormVisible, setNewPlaylistFormVisible] = useState(false);
    const [currentlyChoosenPlaylist, setCurrentlyChoosenPlaylist] = useState(getPlaylists()[0].props.value);
    const add_new_playlist_form = <Prompt component={<AddNewPlaylist updatePlaylistList={() => {setPlaylistsList(getPlaylists())}} />} />;

    if (props.adding_new_playlist_available === true) {
        return (
            <span>
                {addNewPlaylistFormVisible ? 
                    <span>
                        <div className="prompt_background absolute w-full overflow-hidden bg-black bg-opacity-50 fixed top-0 left-0 w-full h-screen z-0" 
                        onClick={() => setNewPlaylistFormVisible(false)}>
                        </div>
                        {add_new_playlist_form}
                    </span>
                : null
                }
                <div className="w-full text-center pt-2 pb-2">
                    <select className="bg-gray-500 w-1/3 rounded" value={currentlyChoosenPlaylist} onChange={event => {
                        setCurrentlyChoosenPlaylist(event.target.value);
                        props.updateParentPlaylistName(event.target.value);
                    }}>
                        {playlistsList}
                    </select>
                    <button className="bg-red-500 hover:bg-red-400 ml-1 text-white font-bold py-1 px-2 border-b-4 border-red-700 hover:border-red-500 rounded mt-1"
                    onClick={() => {
                        json_functions.deletePlaylist(currentlyChoosenPlaylist);
                        if (currentlyChoosenPlaylist == "None") {
                            alert("You didn't select any existing playlist");
                        } else {
                            props.updateParentPlaylistName(getPlaylists()[0].props.value);
                            setPlaylistsList(getPlaylists());
                            alert("Playlist deleted properly");
                        }
                    }}>
                        Delete playlist
                    </button>
                    <button className="bg-green-500 hover:bg-green-400 ml-1 text-white font-bold py-1 px-2 border-b-4 border-green-700 hover:border-green-500 rounded mt-1" 
                    onClick={() => setNewPlaylistFormVisible(true)}>
                        Add new playlist
                    </button>
                </div>
            </span>
        )
    } else {
        return (
                <div className="w-full text-center pt-2 pb-2">
                    <select className="bg-gray-500 w-1/3 rounded" value={currentlyChoosenPlaylist} onChange={event => {
                        setCurrentlyChoosenPlaylist(event.target.value);
                        props.updateParentPlaylistName(event.target.value);
                    }}>
                        {playlistsList}
                    </select>
                </div>
        )
    }
}

export default PlaylistSwitch;