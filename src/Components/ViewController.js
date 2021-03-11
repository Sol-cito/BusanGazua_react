import React from 'react';
import GetRestaurants from '../APIs/GetRestaurants';
import GetPlaces from '../APIs/GetPlaces';
import GetFestivals from '../APIs/GetFestivals';
import { Link } from 'react-router-dom';

const ViewController = ({ match }) => {
    let { viewSelection } = match.params;
    return getView({ viewSelection });
};

const getView = ({ viewSelection }) => {
    let returnView;
    if (viewSelection === ':Restaurants') {
        returnView = (
            <div className='viewContainer'>
                <div className='buttonParent'>
                    <Link to="/RestaurantMap" className='mapButton'>지도로 맛집 확인하기</Link>
                </div>
                <section className='gridContainer'>
                    <GetRestaurants />
                </section>
            </div>
        )
    } else if (viewSelection === ':Places') {
        returnView = (
            <div className='viewContainer'>
                <section className='gridContainer'>
                    <GetPlaces />
                </section>
            </div>
        )
    } else if (viewSelection === ':Festivals') {
        returnView = (
            <div className='viewContainer'>
                <section className='gridContainer'>
                    <GetFestivals />
                </section>
            </div>
        )
    }
    return returnView;
}


export default ViewController;
