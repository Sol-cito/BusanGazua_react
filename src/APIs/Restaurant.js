import React from 'react';

function Restaurant(
    {
        MAIN_TITLE, 
        ITEMCNTNTS,
        PLACE,
        SUBTITLE,
        ADDR1,
        ADDR2,
        CNTCT_TEL,
        USAGE_DAY_WEEK_AND_TIME,
        RPRSNTV_MENU,
        MAIN_IMG_NORMAL
    }){
    return (
        <div>
            <span>음식점 이름 : {MAIN_TITLE}</span><br/>
            <br/>
            <span>소개 : {ITEMCNTNTS}</span><br/>
            <br/>
            <span>장소 : {PLACE}</span><br/>
            <br/>
            <span>섭타이틀 : {SUBTITLE}</span><br/>
            <br/>
            <span>주소1 : {ADDR1}</span><br/>
            <br/>
            <span>주소2 : {ADDR2}</span><br/>
            <br/>
            <span>연락처 : {CNTCT_TEL}</span><br/>
            <br/>
            <span>운영시간 : {USAGE_DAY_WEEK_AND_TIME}</span><br/>
            <br/>
            <span>대표메뉴 : {RPRSNTV_MENU}</span><br/>
            <br/>
            <img src = {MAIN_IMG_NORMAL} alt = "대표 음식 사진"></img><br/>
            <br/>
        </div>
    )
}

export default Restaurant;