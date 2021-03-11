import React from 'react';
import GetRestaurants from '../../APIs/GetRestaurants';
import '../../CSS/ViewOfRestaurants.css'
import { Link } from 'react-router-dom';

function ViewOfRestaurants() {
    return (
        <div className='viewContainer'>
            <div className='buttonParent'>
                <Link to="/RestaurantMap" className='mapButton'>지도로 맛집 확인하기</Link>
            </div>
            <section className='gridContainer'>
                <GetRestaurants />
            </section>
        </div>
    );
}

export default ViewOfRestaurants;
