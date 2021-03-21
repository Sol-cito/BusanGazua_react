import { Component } from 'react';
import Festival from '../Components/Items/Festival';
import ReactLoading from 'react-loading';


class GetFestivals extends Component {

    state = {
        festivals: [],
        pageNo: 1,
        loadingFinished: false
    };

    callAPI = () => {
        try {
            fetch('/api/festivals/' + this.state.pageNo)
                .then(res => res.json())
                .then(festivals => this.setState({
                    festivals: this.state.festivals.concat(festivals)
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
        // window.addEventListener("scroll", this.infiniteScroll);
    };

    // infiniteScroll = () => {
    //     let scrollHeight = document.documentElement.scrollHeight;
    //     let scrollTop = document.documentElement.scrollTop;
    //     let clientHeight = document.documentElement.clientHeight;
    //     if (Math.abs((scrollTop + clientHeight) - scrollHeight) < 1) { // 차이 : 1px
    //         this.setState({ pageNo: this.state.pageNo + 1 });
    //         this.callAPI();
    //     }
    // }

    render() {
        console.log("loadingFinished : " + this.state.loadingFinished);
        return (
            this.state.loadingFinished ?
                this.state.festivals.map((festival) => {
                    return (
                        <div className='gridItem'>
                            <Festival
                                key={festival.UC_SEQ}
                                MAIN_TITLE={festival.MAIN_TITLE}
                                ITEMCNTNTS={festival.ITEMCNTNTS}
                                ADDR1={festival.ADDR1}
                                LAT={festival.LAT}
                                LNG={festival.LNG}
                                CNTCT_TEL={festival.CNTCT_TEL}
                                USAGE_DAY_WEEK_AND_TIME={festival.USAGE_DAY_WEEK_AND_TIME}
                                RPRSNTV_MENU={festival.RPRSNTV_MENU}
                                MAIN_IMG_NORMAL={festival.MAIN_IMG_NORMAL}
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

export default GetFestivals;
