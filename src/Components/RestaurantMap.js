/*  global kakao  */
//  카카오map 을 글로벌 변수로 받아와 kakao객체 생성을 가능케 함.

import React, { useEffect } from 'react';

function RestaurantMap() {
  require('dotenv').config();

  /* 훅으로 componentDidMount 설정 */
  useEffect(() => {
    /* 콜백함수로 syncronization */
    getAllRestaurantData(function (restaurants) {
      /* 마커 만드는 Method */
      const makeMarker = (title, x, y) => {
        new kakao.maps.Marker({
          map: map,
          title: title,
          position: new kakao.maps.LatLng(x, y),
        });
      }

      console.log("useEffect 시작")
      const container = document.getElementById('kakaoMap');
      const options = {
        center: new kakao.maps.LatLng(35.1796, 129.0756),
        level: 7
      };
      const map = new kakao.maps.Map(container, options);

      /*  좌표값 x, y 를 넣어주면 됨. */
      // https://velog.io/@bearsjelly/React-kakao-%EC%A7%80%EB%8F%84-%EB%9D%84%EC%9A%B0%EA%B8%B0-4-%EC%97%AC%EB%9F%AC%EA%B0%9C-%EB%A7%88%EC%BB%A4%EB%9D%84%EC%9A%B0%EA%B8%B0 참고할 것
      {
        restaurants.map((restaurant) => {
          const MAIN_TITLE = restaurant.MAIN_TITLE;
          const LAT = restaurant.LAT;
          const LNG = restaurant.LNG
          makeMarker(MAIN_TITLE, LAT, LNG);
        })
      };
    });
  }, []);


  function getAllRestaurantData(callbackFunc) {
    try {
      fetch('/api/allRestaurants/0')
        .then(res => res.json())
        .then(restaurants => callbackFunc(restaurants))
    } catch (e) {
      console.log("callAPI 실패");
      console.log(e);
    }
  }

  return (
    <div id='kakaoMap' style={{
      width: '100%',
      height: '99.5vh'
    }}></div>
  )
}

export default RestaurantMap;
