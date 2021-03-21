import React, { useEffect, useState } from 'react';
import GetRestaurants from '../APIs/GetRestaurants';
import GetPlaces from '../APIs/GetPlaces';
import GetFestivals from '../APIs/GetFestivals';
import { Link } from 'react-router-dom';

const ViewController = ({ match }) => {
    let { viewSelection } = match.params;
    const [scrollHeight, setScrollHeight] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);

    /* 리액트 훅으로, 두 번째 인자 배열이 비어있으면
     * 컴포넌트가 처음 나타날 때만 호출됨. 
     */
    useEffect(() => {
        // window.addEventListener("scroll", infiniteScroll());
        console.log("마운트되었음");
    },[]);

    const infiniteScroll = () => {
        setScrollHeight(document.documentElement.scrollHeight);
        setScrollTop(document.documentElement.scrollTop);
        setClientHeight(document.documentElement.clientHeight);
        // let scrollHeight = document.documentElement.scrollHeight;
        // let scrollTop = document.documentElement.scrollTop;
        // let clientHeight = document.documentElement.clientHeight;
    
        // let { viewSelection } = match.params;
        if (Math.abs((scrollTop + clientHeight) - scrollHeight) < 1) { // 차이 : 1px
            // this.setState({ pageNo: this.state.pageNo + 1 });
            // this.callAPI();
            console.log("인피니티 스크롤 scrollHeight : "+ scrollHeight);
            console.log("인피니티 스크롤 clientHeight : "+ clientHeight);
        }
    }
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
