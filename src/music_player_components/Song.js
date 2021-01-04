import React from 'react';


function Song(props) {
    if (props.edit_mode === false){
        return (
            <div className="text-center bg-gray-900 rounded text-gray-200 flex p-3 w-full mt-2 mb-4">
                <div className="mt-2 overflow-visible w-3/5 inline truncate text-sm">
                    {props.title}
                </div>

                <div className="mt-2 w-3/4 text-sm">
                    {props.duration}
                </div>

                <button className="align-middle text-sm bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded mr-3">
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

                <button className="align-middle text-sm bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                    delete
                </button>
            </div>
        )
    }
}


export default Song;