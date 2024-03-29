import React from 'react';

function Place(
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
        <div className='cardView'>
            <p className='name'>{MAIN_TITLE}</p>
            <h4>{SUBTITLE}</h4>
            <p className='content'>{ITEMCNTNTS}</p>
            {ADDR1 &&
                <div className='divForTag'>
                    <span className='tag'>주소 : </span>
                    <span>{ADDR1}</span>
                </div>
            }
            {USAGE_AMOUNT &&
                <div className='divForTag'>
                    <span className='tag'>요금 : </span>
                    <span>{USAGE_AMOUNT}</span>
                </div>
            }
            {/* <div className='divForTag'>
                <span className='tag'>교통편 : </span>
                <span>{TRFC_INFO}</span>
            </div> */}
            {HOMEPAGE_URL &&
                <div className='divForTag'>
                    <span className='tag'>홈페이지 : </span>
                    <a href={HOMEPAGE_URL} className='homepage_url'>{HOMEPAGE_URL}</a>
                </div>
            }
            {USAGE_DAY ?
                <div className='divForTag'>
                    <span className='tag'>운영일 : </span>
                    <span>{USAGE_DAY}</span>
                </div>
                :
                <div className='divForTag'>
                    <span className='tag'>** 코로나로 운영이 취소될 수 있습니다</span>
                </div>
            }
            {/* <p>위도 : {LAT}</p>
            <p>경도 : {LNG}</p> */}
            <div className='divForTag'>
                <img src={MAIN_IMG_NORMAL} alt="Can't load"></img>
            </div>
        </div>
    )
}

export default Place;