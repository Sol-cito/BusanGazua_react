import React from 'react';
import GetRestaurants from '../APIs/GetRestaurants';
import './ViewOfRestaurants.css'

function ViewOfRestaurants() {
    return (
        <div className='gridContainer'>
            <GetRestaurants />
        </div>
    );
}

export default ViewOfRestaurants;
