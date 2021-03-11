import React from 'react';
// import '../CSS/ViewOfRestaurants.css'
import GetFestivals from '../../APIs/GetFestivals';

function ViewOfFestivals() {
    return (
        <div className='viewContainer'>
            <section className='gridContainer'>
                <GetFestivals />
            </section>
        </div>
    );
}

export default ViewOfFestivals;
