import { Component } from 'react';
import Restaurant from '../Components/Items/Restaurant';
import ReactLoading from 'react-loading';

class GetRestaurants extends Component {

    state = {
        restaurants: [],
        pageNo: 1,
        loadingFinished: false
    };

    callAPI = () => {
        try {
            fetch('/api/restaurant/' + this.state.pageNo)
                .then(res => res.json())
                .then(restaurants => this.setState({
                    restaurants: this.state.restaurants.concat(restaurants)
                }));
            this.setState({ loadingFinished: true });
            console.log("로딩 피니시");
        } catch (e) {
            console.log("---로딩 실패");
            console.log(e);
        }
    }

    componentDidMount() {
        console.log("컴포넌트 디스마운트");
        setTimeout(() => {
            this.callAPI()
        }, 1000) // 타임아웃 1초
        window.addEventListener("scroll", this.infiniteScroll);
    };

    infiniteScroll = () => {
        let scrollHeight = document.documentElement.scrollHeight;
        let scrollTop = document.documentElement.scrollTop;
        let clientHeight = document.documentElement.clientHeight;
        if (Math.abs((scrollTop + clientHeight) - scrollHeight) < 1) { // 차이 : 1px
            this.setState({ pageNo: this.state.pageNo + 1 });
            this.callAPI();
        }
    }

    render() {
        console.log("loadingFinished : " + this.state.loadingFinished);
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
                <div className = 'loadingSpinner'>
                    <ReactLoading type={'spin'} color={'#ffffff'} height={'100px'} width={'100px'} />
                </div>
        )
    }
};

export default GetRestaurants;
