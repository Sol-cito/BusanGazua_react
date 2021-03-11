import { Component } from 'react';
import Festival from '../Components/Items/Festival';

class GetFestivals extends Component {

    state = {
        festivals: [],
        loadingFinished: false
    };

    componentDidMount() {
        console.log("컴포넌트 디스마운트");
        try {
            console.log();
            fetch('/api/festivals')
                .then(res => res.json())
                .then(festivals => this.setState({ festivals }));
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
                this.state.festivals.map((festival) => {
                    console.log(festival);
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
                <div>
                    <h1>로딩중..........</h1>
                </div>
        )
    }
};

export default GetFestivals;
