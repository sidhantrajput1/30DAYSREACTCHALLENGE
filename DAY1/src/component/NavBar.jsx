import React from 'react';
import DarkModeToggleComponent from './DarkModeToggleComponent';
// import PulseClock from "./../assets/PulseClock.png";

const NavBar = () => {
    return (
        <div className='pt-4'>
            <div className="flex items-center justify-between">
                <h3 className='tracking-widest font-bold p-1 px-4 text-center'>PulseClock</h3>
                <DarkModeToggleComponent />
            </div>
        </div>
    );
}

export default NavBar;
