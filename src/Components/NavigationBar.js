import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <div className='navBody'>
            <Link to="/Home" className='homeTitle' > Busan Gazua </Link>
            <div className='navBlock' >
                <div className='navElement'>
                    <Link to="/Home" className = 'nav_a_Tag'>Home</Link>
                </div>
                <div className='navElement'>
                    <Link to="/ViewController/:Restaurants" className = 'nav_a_Tag'>Restaurants</Link>
                </div>
                <div className='navElement'>
                    <Link to="/ViewController/:Places" className = 'nav_a_Tag'>Places</Link>
                </div>
                <div className='navElement'>
                    <Link to="/ViewController/:Festivals" className = 'nav_a_Tag'>Festivals</Link>
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;
