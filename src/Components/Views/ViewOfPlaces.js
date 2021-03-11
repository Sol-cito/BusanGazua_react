import React from 'react';
// import '../CSS/ViewOfRestaurants.css'
import GetPlaces from '../../APIs/GetPlaces';

function ViewOfPlaces() {
    return (
        <div className='viewContainer'>
            <section className='gridContainer'>
                <GetPlaces />
            </section>
        </div>
    );
}

export default ViewOfPlaces;
