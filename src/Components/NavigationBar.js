import React from 'react';
import '../CSS/NavigationBar.css';
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
                    <Link to="/ViewOfRestaurants">Restaurants</Link>
                </div>
                <div className='navElement'>Places</div>
                <div className='navElement'>Festivals </div>
            </div>
        </div>
    );
}

export default NavigationBar;
