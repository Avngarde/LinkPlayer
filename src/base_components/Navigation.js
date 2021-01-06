import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {useTransition, animated} from 'react-spring';
import NavigationMenu from './NavigationMenu';


function Navigation() {
    const [showMenu, setShowMenu] = useState(false);

    const maskTransition = useTransition(showMenu, null, {
        from: {position: 'absolute', opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
    })

    const menuTransition = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })


    return (
        <nav>
            <span className="text-x1">
                <FontAwesomeIcon 
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>

            {
                maskTransition.map(({ item, key, props }) =>
                item && 
                <animated.div 
                    key={key} 
                    style={props} 
                    className="bg-black bg-opacity-75 fixed top-0 left-0 w-full h-screen z-0"
                    onClick = {() => setShowMenu(false)}>
                </animated.div>
            )}

            {
                menuTransition.map(({ item, key, props }) =>
                item && 
                <animated.div 
                    key={key} 
                    style={props} 
                    className="fixed bg-gray-900 top-0 left-0 w-2/12 h-full z-50 shadow-2xl p-3">
                        <NavigationMenu closeMenu={() => setShowMenu(false)}/>
                </animated.div>
            )}
        </nav>
    );


}

export default Navigation;