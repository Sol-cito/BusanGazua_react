const axios = require('axios');


require('dotenv').config();

const API_KEY = process.env.REACT_APP_RESTAURANT_KEY;
const numOfRows = 20; // 보여줄 아이템 개수


const address = 'http://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=' + API_KEY 
+ '&' + numOfRows + '=20'
+ '&resultType=json';

module.exports.getRestaurantData = async () => {
    const res = await getAPIdata();
    return res.data.getFoodKr.item;
};

const getAPIdata = async () => {
    try {
        return await axios.get(address);
    }catch(e){
        console.log(e);
    }
}