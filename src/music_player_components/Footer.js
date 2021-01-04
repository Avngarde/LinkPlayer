import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight, faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';


function Footer() {
    return (
        <div className="footer w-full h-12 bg-gray-700 text-gray-100 fixed bottom-0 justify-between flex">
            <div className="text-xs mt-4 ml-5 w-4/12 inline-block overflow-visible truncate">
            Marvin Gaye - Let's get it on
            </div>

            <div class="inline-block xl:mr-64 mt-1">
                <button class="bg-gray-800 hover:bg-gray-600 text-gray-300 font-bold py-1 h-8 px-3 mt-1 rounded-l">
                    <FontAwesomeIcon icon={faChevronCircleLeft} />
                </button>
                <button class="bg-gray-800 hover:bg-gray-600 text-gray-300 font-bold py-1 px-3 h-8 mt-1">
                    <FontAwesomeIcon icon={faPauseCircle} />
                </button>
                <button class="bg-gray-800 hover:bg-gray-600 text-gray-300 font-bold py-1 px-3 h-8 rounded-r mt-1">
                    <FontAwesomeIcon icon={faChevronCircleRight} />
                </button>
            </div>
            
            <div className="inline-flex mr-4">
                <input type="range"></input>
            </div>
        </div>
    )
}


export default Footer;