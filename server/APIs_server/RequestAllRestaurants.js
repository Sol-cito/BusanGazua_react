const axios = require('axios');
const e = require('express');


require('dotenv').config();

const API_KEY = process.env.REACT_APP_RESTAURANT_KEY;
const numOfRows = 300; // 보여줄 아이템 개수


const address = 'http://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=' + API_KEY
    + '&'
    + 'numOfRows=' + numOfRows
    + '&'
    + 'resultType=json';

module.exports.getAllRestaurantData = async () => {
    try {
        console.log("[SERVER] 요청 주소 : " + address + '&pageNo=1');
        res = await axios.get(address + '&pageNo=1');
        // console.log("레스토랑 결과 : "+res.data.getFoodKr.item);
        return res.data.getFoodKr.item;
    } catch (e) {
        console.log(e);
    }
};