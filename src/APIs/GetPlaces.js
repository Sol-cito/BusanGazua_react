import { Component } from 'react';
import Place from '../Components/Items/Place';

class GetPlaces extends Component {

    state = {
        places: [],
        loadingFinished: false
    };

    componentDidMount() {
        console.log("컴포넌트 디스마운트");
        try {
            fetch('/api/places')
                .then(res => res.json())
                .then(places => this.setState({ places }));
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
                this.state.places.map((place) => {
                    console.log(place);
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
                <div>
                    <h1>로딩중..........</h1>
                </div>
        )
    }
};

export default GetPlaces;
