import React, { Component } from 'react';
import Slider from "react-slick";
import '../CSS/Home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const mainText1 = "마!";
    const mainText2 = "부산의 명소, 맛집, 관광 정보를 제공하는 웹페이지, 'Busan Gazua' 입니다.";

    const settings = {
      // dots: true, // 밑에 점 없애기
      infinite: true, // 무한 루프
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <div class='carouselContainer'>
        <Slider {...settings}>
          <div>
            <img src='https://github.com/Sol-cito/BusanGazua_react/blob/main/src/img/GwanganBridge.jpg?raw=true' alt="이미지가 없습니다"></img>
          </div>
          <div>
            <img src='https://github.com/Sol-cito/BusanGazua_react/blob/main/src/img/BusanStreet.jpg?raw=true' alt="이미지가 없습니다"></img>
          </div>
          <div>
            <img src='https://github.com/Sol-cito/BusanGazua_react/blob/main/src/img/GukBabBusan.jpg?raw=true' alt="이미지가 없습니다"></img>
          </div>
        </Slider>
        <div className='overlapContainer'>
          <img src='https://github.com/Sol-cito/BusanGazua_react/blob/main/src/img/BlackImg.jpg?raw=true' alt="이미지가 없습니다"></img>
        </div>
        <div className = 'overlapParagraph'>
          <p className = 'mainText1'>{mainText1}</p>
          <p className = 'mainText2'>{mainText2}</p>
        </div>
      </div>
    );
  }
}