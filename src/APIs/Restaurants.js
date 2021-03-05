import { Component } from 'react';
import './Restaurants.css'

// const API_KEY = process.env.REACT_APP_RESTAURANT_KEY

class Restaurants extends Component {
    state = {
        restaurants: [],
        loadingFinished: false
    };

    componentDidMount() {
        console.log("컴포넌트 디스마운트");
        fetch('/api')
            .then(res => res.json())
            .then(restaurants => this.setState({restaurants}))
        this.setState({ loadingFinished: true })
        console.log("로딩 피니시")
    };

    render() {
        console.log("렌더링");
        console.log(this.state.restaurants);
        console.log(this.state.loadingFinished);
        return (
            this.state.loadingFinished ? 
            <div>
                <span> {JSON.stringify(this.state.restaurants) }</span>
            </div>
            :
            <div>
                <h1>로딩중..........</h1>
            </div>
        )
    }
};

export default Restaurants;
