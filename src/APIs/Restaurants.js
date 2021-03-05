import { Component } from 'react';
import './Restaurants.css'

// const API_KEY = process.env.REACT_APP_RESTAURANT_KEY

class Restaurants extends Component{
    state = {name: ""};

    componentDidMount(){
        console.log("컴포넌트 디스마운트");
        fetch('/api')
            .then(res => res.json())
            .then(name => this.setState( name ));
    };

    render(){
        return (
            <div>
                <h1>나의 이름 : { this.state.name }</h1>
            </div>
        )
    }
};

export default Restaurants;
