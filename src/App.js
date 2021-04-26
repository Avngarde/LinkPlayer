import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './base_components/Header';
import SongsGrid from './music_player_components/SongsGrid';
import PlaylistSwitch from './music_player_components/PlaylistSwitch';
import ViewPlaylists from './view_playlists/ViewPlaylists';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight, faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import * as json_functions from './json_functions/json_functions';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [currentPlaylistName, setCurrentPlaylistName] = useState(json_functions.getAllPlaylists()[0].name);
  const [currentSongName, setCurrentSongName] = useState("");
  const [paused, setPaused] = useState(true);
  const [currentAudio, setCurrentAudio] = useState(new Audio(""));

  const updateAppPlaylistName = (playlist_name) => {
    setCurrentPlaylistName(playlist_name)
}

const playSong = (song_name) => {
    if (currentAudio.currentTime <= 0) {
      let path = "file:///src/songs/" + song_name + ".mp3";
      setCurrentSongName(song_name);
      setCurrentAudio(new Audio(path));
    }
}

useEffect(() => {
  setPaused(false);
  currentAudio.play();
}, [currentAudio]);

const pauseOrContinueSong = () => {
    if (paused) {
      setPaused(false);
      currentAudio.play();
    } else {
      setPaused(true);
      currentAudio.pause();
    }
}

const changeVolume = (volume) => {
    currentAudio.volume = volume/150;
}

return (
    <div className="h-screen w-full overflow-hidden bg-gray-800">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <PlaylistSwitch adding_new_playlist_available={false} updateParentPlaylistName={updateAppPlaylistName} />
            <SongsGrid edit_mode={false} playlist_name={currentPlaylistName} play_song={playSong}/>
            <div className="footer w-full h-12 bg-gray-700 text-gray-100 fixed bottom-0 justify-between flex">
              <div className="text-xs mt-4 ml-5 w-4/12 inline-block overflow-visible truncate">
                  {currentSongName}
              </div>

              <div class="inline-block xl:mr-64 mt-1">
                  <button class="bg-gray-800 hover:bg-gray-600 text-gray-300 font-bold py-1 px-10 h-8 mt-1" onClick={() => {pauseOrContinueSong()}}>
                    {paused ? <FontAwesomeIcon icon={faPlayCircle} /> : <FontAwesomeIcon icon={faPauseCircle} />}
                  </button>
              </div>
              
              <div className="inline-flex mr-4">
                  <input type="range" min="0" max="100" onChange={e => {
                    changeVolume(e.target.value);
                  }}></input>
              </div>
            </div>
          </Route>

          <Route path="/view_playlists">
            <Header />
            <ViewPlaylists updateAppPlaylistName={updateAppPlaylistName} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;