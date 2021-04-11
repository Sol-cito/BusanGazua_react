import { Component } from 'react';
import Festival from '../Components/Items/Festival';
import ReactLoading from 'react-loading';


class GetFestivals extends Component {

    state = {
        festivals: [],
        festivalsArrSise: 0,
        pageNo: 1,
        loadingFinished: false,
        moreDataExist: true,
        loadingOK: true
    };

    callAPI = () => {
        console.log("부르기 전 사이즈 : " + this.state.festivalsArrSise);
        fetch('/api/festivals/' + this.state.pageNo)
            .then(res => res.json())
            .then(festivals => this.setState({
                festivals: this.state.festivals.concat(festivals)
            }))
            .catch(error => this.setState({ loadingOK: false }));
        /* 추가된 데이터가 없으면 noMoreData 플래그를 true로 만든다. */
        if (this.state.loadingFinished === true && this.state.festivalsArrSise === this.state.festivals.length) {
            console.log("노 모어 데이터!!!!!!!!!");
            this.setState({
                moreDataExist: false
            })
        }
        this.setState({
            festivalsArrSise: this.state.festivals.length
        })
        this.setState({ loadingFinished: true });
        console.log("로딩 피니시");
        this.setState({ loadingOK: true });
    }

    componentDidMount() {
        console.log("컴포넌트 디스마운트");
        setTimeout(() => {
            this.callAPI()
        }, 1000) // 타임아웃 1초
        window.addEventListener("scroll", this.infiniteScroll);
    };

    componentWillUnmount() {
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
            } else {
                alert("더 이상 불러올 데이터가 없습니다.");
            }
        }
    }

    render() {
        console.log("loadingFinished : " + this.state.loadingFinished);
        console.log("loadingFinished : " + this.state.loadingFinished);
        return (
            this.state.loadingOK ?
                (this.state.loadingFinished ?
                    this.state.festivals.map((festival) => {
                        return (
                            <div className='gridItem'>
                                <Festival
                                    key={festival.UC_SEQ}
                                    MAIN_TITLE={festival.MAIN_TITLE}
                                    SUBTITLE={festival.SUBTITLE}
                                    ITEMCNTNTS={festival.ITEMCNTNTS}
                                    ADDR1={festival.ADDR1}
                                    LAT={festival.LAT}
                                    LNG={festival.LNG}
                                    USAGE_DAY={festival.USAGE_DAY}
                                    USAGE_AMOUNT={festival.USAGE_AMOUNT}
                                    TRFC_INFO={festival.TRFC_INFO}
                                    HOMEPAGE_URL={festival.HOMEPAGE_URL}
                                    MAIN_IMG_NORMAL={festival.MAIN_IMG_NORMAL}
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

export default GetFestivals;
