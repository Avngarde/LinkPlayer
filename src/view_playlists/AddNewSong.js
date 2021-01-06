import React from 'react';


function AddNewSong(props) {
    const addNewSong = (props) => {

    }

    return (
    <div className="w-full text-center">
        <input class="shadow appearance-none border rounded w-1/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3" id="username" type="text" placeholder="URL (Youtube, SoundCloud)"></input>
        <button class="bg-blue-500 hover:bg-blue-400 ml-1 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-3">
            Add new song
        </button>
    </div>
    )
}


export default AddNewSong;