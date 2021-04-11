import { Component } from 'react';
import Restaurant from '../Components/Items/Restaurant';
import ReactLoading from 'react-loading';

class GetRestaurants extends Component {

    state = {
        restaurants: [],
        restaurantsArrSize: 0,
        pageNo: 1,
        loadingFinished: false,
        moreDataExist: true,
        loadingOK: true
    };

    callAPI = () => {
        fetch('/api/restaurants/' + this.state.pageNo)
            .then(res => res.json())
            .then(restaurants => this.setState({
                restaurants: this.state.restaurants.concat(restaurants)
            }))
            .catch(error => this.setState({ loadingOK: false }));
        /* 추가된 데이터가 없으면 noMoreData 플래그를 true로 만든다. */
        if (this.state.loadingFinished === true
            && this.state.restaurantsArrSize === this.state.restaurants.length) {
            console.log("노 모어 데이터!!!!!!!!!");
            this.setState({
                moreDataExist: false
            })
        }
        this.setState({
            restaurantsArrSize: this.state.restaurants.length
        })
        this.setState({ loadingFinished: true });
        console.log("로딩 피니시");
        this.setState({ loadingOK: true });
    }

    componentDidMount() {
        setTimeout(() => {
            this.callAPI("restaurants")
        }, 1000) // 타임아웃 1초
        window.addEventListener("scroll", this.infiniteScroll);
    };

    /* 렌더링 해제될 때 이벤트리스너도 해제해야 한다.
     * 그렇지 않으면, GetPlaces와 GetFestivals에서도
     * 스크롤 내릴 때 계속 호출된다.
     *  */
    componentWillUnmount() {
        window.removeEventListener("scroll", this.infiniteScroll);
    }

    infiniteScroll = () => {
        console.log("인피니티 스크롤----------------------");
        let scrollHeight = document.documentElement.scrollHeight;
        let scrollTop = document.documentElement.scrollTop;
        let clientHeight = document.documentElement.clientHeight;
        if (Math.abs((scrollTop + clientHeight) - scrollHeight) < 1) { // 차이 : 1px
            if (this.state.moreDataExist) {
                this.setState({ pageNo: this.state.pageNo + 1 });
                this.callAPI();
            } else {
                alert("더 이상 불러올 데이터가 없습니다.");
            }
        }
    }

    render() {
        console.log("loadingFinished : " + this.state.loadingFinished);
        return (
            this.state.loadingOK ?
                (this.state.loadingFinished ?
                    this.state.restaurants.map((restaurant) => {
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
                    <div className='loadingSpinner'>
                        <ReactLoading type={'spin'} color={'#ffffff'} height={'100px'} width={'100px'} />
                    </div>
                ) : (
                    <div className="errorMessage">
                        <h4>서버 통신과의 Error가 발생하였습니다.</h4>
                    </div>
                )
        )
    }
};

export default GetRestaurants;
