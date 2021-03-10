import { Component } from 'react';

class GetPlaces extends Component {

    state = {
        places: [],
        loadingFinished: false
    };

    componentDidMount() {
        console.log("컴포넌트 디스마운트");
        try {
            console.log();
            fetch('/api')
                .then(res => res.json())
                .then(restaurants => this.setState({ restaurants }));
            this.setState({ loadingFinished: true });
            console.log("로딩 피니시");
        } catch (e) {
            console.log("---로딩 실패");
            console.log(e);
        }
    };

    render() {
        return (
            this.state.loadingFinished ?
                this.state.restaurants.map((restaurant) => {
                    console.log(restaurant);
                    return (
                        <div className='gridItem'>
                            <Restaurant
                                key={restaurant.UC_SEQ}
                                MAIN_TITLE={restaurant.MAIN_TITLE}
                                ITEMCNTNTS={restaurant.ITEMCNTNTS}
                                ADDR1={restaurant.ADDR1}
                                LAT={restaurant.LAT}
                                LNG={restaurant.LNG}
                                CNTCT_TEL={restaurant.CNTCT_TEL}
                                USAGE_DAY_WEEK_AND_TIME={restaurant.USAGE_DAY_WEEK_AND_TIME}
                                RPRSNTV_MENU={restaurant.RPRSNTV_MENU}
                                MAIN_IMG_NORMAL={restaurant.MAIN_IMG_NORMAL}
                            />
                        </div>
                    )
                })
                :
                <div>
                    <h1>로딩중..........</h1>
                </div>
        )
    }
};

export default GetPlaces;
