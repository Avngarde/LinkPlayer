import React from 'react';


function Prompt(props) {
    return (
        <span className="prompt w-2/4 h-32 text-gray-100 bg-gray-800 rounded z-2 m-auto absolute justify-center flex flex-col justify-center items-center" id>
            {props.component}
        </span>
    )
}


export default Prompt;