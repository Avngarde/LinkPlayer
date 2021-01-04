import React from 'react';
import { Link } from 'react-router-dom';


function NavigationMenu(props) {
    return (
        <div>
            <div className="font-bold bg-gray-900 py-3 text-gray-100 rounded text-center w-full">
                The Menu
            </div>
            <ul>
                <li>
                    <Link to="/" className="text-blue-500 block py-3 border-b" onClick={props.closeMenu}>Music player</Link>
                </li>

                <li>
                    <Link to="/view_playlists" className="text-blue-500 block py-3 border-b" onClick={props.closeMenu}>View playlists</Link>
                </li>
            </ul>
        </div>
    )
}


export default NavigationMenu;