import React, { useEffect, useState } from 'react';
import './Restaurants.css'
import dotenv from 'dotenv'
import axios from 'axios';
// import axios from 'axios'

dotenv.config()

const API_KEY = process.env.REACT_APP_RESTAURANT_KEY

function Restaurants() {
    const [isLoading, setLoading] = useState(false)
    // const restaurants = []

    console.log("첫 번째")

    useEffect(() => {
        console.log("유즈 이펙트")
        const restaurants = axios.get('http://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=' + API_KEY + '&resultType=json')
        setLoading(true)
    }, [])
    console.log(isLoading)
    return isLoading ? (
        <h4>로딩 중</h4>
    ) : (
        <h4>로딩 끝</h4>
        )
}

export default Restaurants;
