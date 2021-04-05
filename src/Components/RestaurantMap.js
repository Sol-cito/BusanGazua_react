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
      RPRSNTV_MENU,
      MAIN_IMG_THUMB,
      LAT,
      LNG,
      ADDR1
    ) => {
      const marker = new kakao.maps.Marker({
        map: map,
        title: MAIN_TITLE,
        position: new kakao.maps.LatLng(LAT, LNG),
        // clickable: true
      });

      const markerContent =
        '<div>'
        + '<div style="text-align:center;">'
        + '<h3>' + MAIN_TITLE + '</h3>'
        + '</div>'
        + '<div>'
        + '<b>대표메뉴</b> : ' + RPRSNTV_MENU
        + '</div>'
        + '<br/>'
        + '<div>'
        + ADDR1
        + '</div>'
        + '</br>'
        + '<div style="text-align:center;">'
        + '<img src=' + MAIN_IMG_THUMB + ' alt="no image" style="width:300px;height:200px">'
        + '</div>'
        + '</div>';

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

    const container = document.getElementById('kakaoMap');
    const options = {
      center: new kakao.maps.LatLng(35.1796, 129.0756),
      level: 7
    };
    const map = new kakao.maps.Map(container, options);

    {
      allRestaurants.map((restaurant) => {
        const MAIN_TITLE = restaurant.MAIN_TITLE;
        const RPRSNTV_MENU = restaurant.RPRSNTV_MENU;
        const MAIN_IMG_THUMB = restaurant.MAIN_IMG_THUMB;
        const LAT = restaurant.LAT;
        const LNG = restaurant.LNG
        const ADDR1 = restaurant.ADDR1;
        makeMarker(
          MAIN_TITLE,
          RPRSNTV_MENU,
          MAIN_IMG_THUMB,
          LAT,
          LNG,
          ADDR1
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
