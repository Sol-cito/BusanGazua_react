const express = require('express');
const axios = require('axios');
const app = express();


require('dotenv').config();

const API_KEY = process.env.REACT_APP_RESTAURANT_KEY;

const port = 4000; // 서버 포트 4000번
app.listen(port, () =>
    console.log('Node.js Server 가 실행되었음'),
);

const address = 'http://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=' + API_KEY 
+ '&numOfRows=20'
+ '&resultType=json';

const getAPIdata = async () => {
    try {
        return await axios.get(address);
    }catch(e){
        console.log(e);
    }
}

app.get('/api', async (req, res) => {
    console.log("겟 요청 들어옴");
    const apiData = await getAPIdata();
    const items = apiData.data.getFoodKr.item;
    console.log(items);
    res.json(items);
});