import React from 'react';
import Navigation from './Navigation';

function Header() {
    return (
        <div>
            <div className="header w-full h-13 bg-gray-900 text-gray-100 p-3 sticky top-0 flex justify-between">
                LinkPlayer
                <Navigation  className="mr-12" />
            </div>
        </div>
    )
}


export default Header;