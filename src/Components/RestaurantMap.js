/*  global kakao  */
//  카카오map 을 글로벌 변수로 받아와 kakao객체 생성을 가능케 함.

import React, { useEffect } from 'react';
import { useState } from 'react';

function RestaurantMap() {

  const [allRestaurants, setRestaurant] = useState([]);

  require('dotenv').config();

  function getAllRestaurantData() {
    console.log("요청");
    try {
      fetch('/api/allRestaurants/0')
        .then(res => res.json())
        .then(restaurants => setRestaurant(allRestaurants => allRestaurants.concat(restaurants)))
      console.log("데이터 받아옴 : ");
    } catch (e) {
      console.log("callAPI 실패");
      console.log(e);
    }
  }

  /* 훅으로 componentDidMount 설정 */
  useEffect(() => {
    console.log("useEffect 시작")
    console.log("데이터 : " + allRestaurants);

    if (allRestaurants.length == 0) {
      getAllRestaurantData();
    }

    /* 마커 만드는 Method */

    const makeMarker = (
      MAIN_TITLE,
      ITEMCNTNTS,
      RPRSNTV_MENU,
      MAIN_IMG_THUMB,
      LAT,
      LNG
    ) => {
      const marker = new kakao.maps.Marker({
        map: map,
        title: MAIN_TITLE,
        position: new kakao.maps.LatLng(LAT, LNG),
        // clickable: true
      });

      const markerContent =
        '<h4>' + MAIN_TITLE + '</h4>'
        + '<span> 대표메뉴 : ' + RPRSNTV_MENU + '</span><br/>'
        // + '<span style="width:50px">' + ITEMCNTNTS + '</span><br/>'
        + '<img src=' + MAIN_IMG_THUMB + ' alt="no image" style="width:200px;height:200px">';

      /* 마커 위 infoWindow 생성 */
      const infowindow = new kakao.maps.InfoWindow({
        content: markerContent
      });
      kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeMouseOverListener(map, marker, infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListener(infowindow)
      );

      /* 모바일로 했을 때 mouseover가 먹히지 않음. mouseClick은 먹히나, infoWindow가 사라지지 않음 */
      /* https://devtalk.kakao.com/t/topic/109328/2 이대로 하면 될듯 !*/
      function makeMouseOverListener(map, marker, infowindow) {
        return function () {
          infowindow.open(map, marker);
        };
      }

      function makeOutListener(infowindow) {
        return function () {
          infowindow.close();
        };
      }
    }

    console.log("여기요???");

    const container = document.getElementById('kakaoMap');
    const options = {
      center: new kakao.maps.LatLng(35.1796, 129.0756),
      level: 7
    };
    const map = new kakao.maps.Map(container, options);

    {
      allRestaurants.map((restaurant) => {
        const MAIN_TITLE = restaurant.MAIN_TITLE;
        const ITEMCNTNTS = restaurant.ITEMCNTNTS;
        const RPRSNTV_MENU = restaurant.RPRSNTV_MENU;
        const MAIN_IMG_THUMB = restaurant.MAIN_IMG_THUMB;
        const LAT = restaurant.LAT;
        const LNG = restaurant.LNG
        makeMarker(
          MAIN_TITLE,
          ITEMCNTNTS,
          RPRSNTV_MENU,
          MAIN_IMG_THUMB,
          LAT,
          LNG
        );
      })
    };
  });

  return (
    <div id='kakaoMap' style={{
      width: '100%',
      height: '99.5vh'
    }}></div>
  )
}

export default RestaurantMap;
