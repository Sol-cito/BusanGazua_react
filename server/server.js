const express = require('express');
const axios = require('axios');
const app = express();

// node 서버에서 axios로 API 데이터 얻는 함수
const getAPIdata = async () => {
    let response;
    try {
        response = await axios.get('http://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=c1g26jTnByGW5kb0HXyLjLfpLsO%2FcByKq4WxxOygJ2GBxWCHOVvFPVSbrHJ6LY2uMqkHDT7kkLVAUKyit3ykEg%3D%3D&resultType=json');
    } catch (e) {
        console.log(e);
    }
    return response;
};

const port = 4000; // 서버 포트 4000번
app.listen(port, () =>
    console.log('Node.js Server 가 실행되었음')
);


app.get('/api', (req, res) => {
    console.log("겟 요청 들어옴")
    res.json({
                'name' : 'Dasol'
            });
})

// app.get('/', (req, res) => {
//     getAPIdata().then((response) => {
//         res.setHeader("Access-Control-Allow-Origin", "*"); // CORS 이슈 방지
//         res.json(response);
//     });
// }); // node 서버에서 front로 json을 보냄