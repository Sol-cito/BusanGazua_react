import React from 'react';
import '../../CSS/Festival.css'

function Festival(
    {   
        MAIN_TITLE,
        SUBTITLE,
        ITEMCNTNTS,
        ADDR1,
        LAT,
        LNG,
        USAGE_DAY,
        USAGE_AMOUNT,
        TRFC_INFO,
        HOMEPAGE_URL,
        MAIN_IMG_NORMAL
    }) {
    return (
        <div className='festival'>
            <p className='name'>{MAIN_TITLE}</p>
            <p className='content'>{SUBTITLE}</p>
            <p className='content'>{ITEMCNTNTS}</p>
            <div className='divForTag'>
                <span className='tag'>주소 : </span>
                <span>{ADDR1}</span>
            </div>
            <div className='divForTag'>
                <span className='tag'>운영일 : </span>
                <span>{USAGE_DAY}</span>
            </div>
            <div className='divForTag'>
                <span className='tag'>요금 : </span>
                <span>{USAGE_AMOUNT}</span>
            </div>
            <div className='divForTag'>
                <span className='tag'>교통편 : </span>
                <span>{TRFC_INFO}</span>
            </div>
            <div className='divForTag'>
                <span className='tag'>홈페이지 : </span>
                <span>{HOMEPAGE_URL}</span>
            </div>
            {/* <p>위도 : {LAT}</p>
            <p>경도 : {LNG}</p> */}
            <div className='divForTag'>
                <img src={MAIN_IMG_NORMAL} alt="Can't load"></img>
            </div>
        </div>
    )
}

export default Festival;