import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <div className='navBody'>
            <span className='homeTitle' > Busan Gazua </span>
            <div className='navBlock' >
                <div className='navElement'>
                    <Link to="/Home">Home</Link>
                </div>
                <div className='navElement'>
                    <Link to="/ViewController/:Restaurants">Restaurants</Link>
                </div>
                <div className='navElement'>
                    <Link to="/ViewController/:Places">Places</Link>
                </div>
                <div className='navElement'>
                    <Link to="/ViewController/:Festivals">Festivals</Link>
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;
