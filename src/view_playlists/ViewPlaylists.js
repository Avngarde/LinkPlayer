import React, { useState } from 'react';
import PlaylistSwitch from '../music_player_components/PlaylistSwitch';
import AddNewSong from './AddNewSong';
import SongsGrid from '../music_player_components/SongsGrid';
import * as json_functions from '../json_functions/json_functions';



function ViewPlaylists(props) {
    const [currentPlaylistName, setCurrentPlaylistName] = useState(json_functions.getAllPlaylists()[0].name);

    const updateParentPlaylistName = (playlist_name) => {
        props.updateAppPlaylistName(playlist_name);
        setCurrentPlaylistName(playlist_name)
    }

    return (
        <div className="h-screen w-full overflow-hidden">
            <PlaylistSwitch adding_new_playlist_available={true} updateParentPlaylistName={updateParentPlaylistName} />
            <AddNewSong playlist_name={currentPlaylistName} updateParentPlaylistName={updateParentPlaylistName} />
            <SongsGrid edit_mode={true} playlist_name={currentPlaylistName} />
        </div>
    )
}

export default ViewPlaylists;