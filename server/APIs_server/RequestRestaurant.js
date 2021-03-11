const axios = require('axios');
const e = require('express');


require('dotenv').config();

const API_KEY = process.env.REACT_APP_RESTAURANT_KEY;
const numOfRows = 10; // 보여줄 아이템 개수


const address = 'http://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=' + API_KEY
    + '&'
    + 'numOfRows=' + numOfRows
    + '&'
    + 'resultType=json';

module.exports.getRestaurantData = async (pageNo) => {
    try {
        console.log("[SERVER] 요청 주소 : " + address + '&pageNo=' + pageNo);
        res = await axios.get(address + '&pageNo=' + pageNo);
        return res.data.getFoodKr.item;
    } catch (e) {
        console.log(e);
    }
};