import React from 'react';
import '../CSS/Restaurant.css'

function Restaurant(
    {   
        MAIN_TITLE,
        ITEMCNTNTS,
        ADDR1,
        LAT,
        LNG,
        CNTCT_TEL,
        USAGE_DAY_WEEK_AND_TIME,
        RPRSNTV_MENU,
        MAIN_IMG_NORMAL
    }) {
    return (
        <div className='restaurant'>
            <p className='name'>{MAIN_TITLE}</p>
            <p className='content'>{ITEMCNTNTS}</p>
            <div className='divForTag'>
                <span className='tag'>대표메뉴 : </span>
                <span>{RPRSNTV_MENU}</span>
            </div>
            <div className='divForTag'>
                <span className='tag'>주소 : </span>
                <span>{ADDR1}</span>
            </div>
            <div className='divForTag'>
                <span className='tag'>연락처 : </span>
                <span>{CNTCT_TEL}</span>
            </div>
            <div className='divForTag'>
                <span className='tag'>영업시간 : </span>
                <span>{USAGE_DAY_WEEK_AND_TIME}</span>
            </div>
            {/* <p>위도 : {LAT}</p>
            <p>경도 : {LNG}</p> */}
            <div className='divForTag'>
                <img src={MAIN_IMG_NORMAL} alt="Can't load"></img>
            </div>
        </div>
    )
}

export default Restaurant;