const axios = require('axios');


require('dotenv').config();

const API_KEY = process.env.REACT_APP_RESTAURANT_KEY;
const numOfRows = 10; // 보여줄 아이템 개수


const address = 'http://apis.data.go.kr/6260000/FestivalService/getFestivalKr?ServiceKey=' + API_KEY
    + '&'
    + 'numOfRows=' + numOfRows
    + '&'
    + 'resultType=json';

module.exports.getFestivalData = async () => {
    const res = await getAPIdata();
    return res.data.getFestivalKr.item;
};

const getAPIdata = async () => {
    try {
        return await axios.get(address);
    } catch (e) {
        console.log(e);
    }
}