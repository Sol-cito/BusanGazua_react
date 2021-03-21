const axios = require('axios');


require('dotenv').config();

const API_KEY = process.env.REACT_APP_RESTAURANT_KEY;
const numOfRows = 10; // 보여줄 아이템 개수


const address = 'http://apis.data.go.kr/6260000/FestivalService/getFestivalKr?ServiceKey=' + API_KEY
    + '&'
    + 'numOfRows=' + numOfRows
    + '&'
    + 'resultType=json';

module.exports.getFestivalData = async (pageNo) => {
    try {
        console.log("[SERVER] 요청 주소 : " + address + '&pageNo=' + pageNo);
        res = await axios.get(address + '&pageNo=' + pageNo);
        console.log("getFestivalData 결과 : " + res.data.getFestivalKr.item);
        return res.data.getFestivalKr.item;
    } catch (e) {
        console.log(e);
    }
};