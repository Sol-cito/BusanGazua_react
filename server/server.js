const express = require('express');
const app = express();

const requestRestaurant = require('./APIs_server/RequestRestaurant');
const requestPlaces = require('./APIs_server/RequestPlaces');
const RequestFestivals = require('./APIs_server/RequestFestivals');

const port = 4000; // 서버 포트 4000번
app.listen(port, () =>
    console.log('Node.js Server 가 실행되었음'),
);

/* 컨트롤러 역할을 함 - { service }에 따라 분기 */
app.get('/api/:service/:pageNo', async (req, res) => {
    let { service } = req.params;
    let { pageNo } = req.params;
    console.log("----request service : " + service);
    console.log("----request pageNo : " + pageNo);
    let result = -1;
    if (service == 'restaurant') {
        console.log("-------> 레스토랑 api 요청");
        result = await requestRestaurant.getRestaurantData(pageNo);
    } else if (service == 'places') {
        console.log("-------> 장소 api 요청");
        result = await requestPlaces.getPlaceData();
    } else if (service == 'festivals') {
        console.log("-------> 축제 api 요청");
        result = await RequestFestivals.getFestivalData();
    }
    res.json(result);
});