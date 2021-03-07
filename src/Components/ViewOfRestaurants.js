import React from 'react';
import GetRestaurants from '../APIs/GetRestaurants';
import './ViewOfRestaurants.css'

function ViewOfRestaurants() {
    return (
        <div>
            <div className='gridContainer'>
                <GetRestaurants />
            </div>
        </div>
    );
}

export default ViewOfRestaurants;
