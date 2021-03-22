import { Component } from 'react';
import Place from '../Components/Items/Place';
import ReactLoading from 'react-loading';


class GetPlaces extends Component {

    state = {
        places: [],
        placesArrSise: 0,
        pageNo: 1,
        loadingFinished: false,
        moreDataExist: true
    };

    callAPI = () => {
        try {
            fetch('/api/places/' + this.state.pageNo)
                .then(res => res.json())
                .then(places => this.setState({
                    places: this.state.places.concat(places)
                }));
            /* 추가된 데이터가 없으면 noMoreData 플래그를 true로 만든다. */
            if (this.state.loadingFinished == true && this.state.placesArrSise == this.state.places.length) {
                console.log("노 모어 데이터!!!!!!!!!");
                this.setState({
                    moreDataExist: false
                })
            }
            this.setState({
                placesArrSise: this.state.places.length
            })
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
    
    componentWillUnmount(){
        window.removeEventListener("scroll", this.infiniteScroll);
    }

    infiniteScroll = () => {
        let scrollHeight = document.documentElement.scrollHeight;
        let scrollTop = document.documentElement.scrollTop;
        let clientHeight = document.documentElement.clientHeight;
        if (Math.abs((scrollTop + clientHeight) - scrollHeight) < 1) { // 차이 : 1px
            if (this.state.moreDataExist) {
                this.setState({ pageNo: this.state.pageNo + 1 });
                this.callAPI();
            }else{
                alert("더 이상 불러올 데이터가 없습니다.");
            }
        }
    }

    render() {
        console.log("loadingFinished : " + this.state.loadingFinished);
        return (
            this.state.loadingFinished ?
                this.state.places.map((place) => {
                    return (
                        <div className='gridItem'>
                            <Place
                                key={place.UC_SEQ}
                                MAIN_TITLE={place.MAIN_TITLE}
                                SUBTITLE={place.SUBTITLE}
                                ITEMCNTNTS={place.ITEMCNTNTS}
                                ADDR1={place.ADDR1}
                                LAT={place.LAT}
                                LNG={place.LNG}
                                USAGE_DAY={place.USAGE_DAY}
                                USAGE_AMOUNT={place.USAGE_AMOUNT}
                                TRFC_INFO={place.TRFC_INFO}
                                HOMEPAGE_URL={place.HOMEPAGE_URL}
                                MAIN_IMG_NORMAL={place.MAIN_IMG_NORMAL}
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

export default GetPlaces;
