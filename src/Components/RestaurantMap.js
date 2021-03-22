/*  global kakao  */

import React, { useEffect } from 'react';

function RestaurantMap() {

  require('dotenv').config();
  /* 훅으로 componentDidMount 설정 */
  useEffect(() => {
    console.log("useEffect 시작")
    console.log("카카오 맵스 읽기 ======== : " + kakao.maps);
    const container = document.getElementById('kakaoMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <div id='kakaoMap' style={{
      width: '1000px',
      height: '1000px'
    }}>여기?</div>
  );
}

export default RestaurantMap;
