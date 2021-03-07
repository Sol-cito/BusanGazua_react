import { Component } from 'react';
import Restaurant from './Restaurant';

class GetRestaurants extends Component {

    state = {
        restaurants: [],
        loadingFinished: false
    };

    componentDidMount() {
        console.log("컴포넌트 디스마운트");
        try {
            fetch('/api')
                .then(res => res.json())
                .then(restaurants => this.setState({ restaurants }));
            this.setState({ loadingFinished: true });
            console.log("로딩 피니시");
        } catch(e){
            console.log("---로딩 실패");
            console.log(e);
        }
    };

    render() {
        console.log("렌더링");
        console.log(this.state.restaurants);
        console.log(this.state.loadingFinished);
        return (
            this.state.loadingFinished ?
                this.state.restaurants.map((restaurant) => {
                    console.log(restaurant);
                    return (
                        <Restaurant
                            key = {restaurant.UC_SEQ}
                            MAIN_TITLE = {restaurant.MAIN_TITLE}
                            ITEMCNTNTS = {restaurant.ITEMCNTNTS}
                            PLACE = {restaurant.PLACE}
                            SUBTITLE = {restaurant.SUBTITLE}
                            ADDR1 = {restaurant.ADDR1}
                            ADDR2 = {restaurant.ADDR2}
                            CNTCT_TEL = {restaurant.CNTCT_TEL}
                            USAGE_DAY_WEEK_AND_TIME = {restaurant.USAGE_DAY_WEEK_AND_TIME}
                            RPRSNTV_MENU = {restaurant.RPRSNTV_MENU}
                            MAIN_IMG_NORMAL = {restaurant.MAIN_IMG_NORMAL}
                        />
                    )
                })
                // <div>
                //     <span> {JSON.stringify(this.state.restaurants)}</span>
                // </div>
                :
                <div>
                    <h1>로딩중..........</h1>
                </div>
        )
    }
};

export default GetRestaurants;
