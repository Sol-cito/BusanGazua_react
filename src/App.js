import React from 'react';
import './CSS/App.css';
import './CSS/CardView.css';
import './CSS/PageView.css';
import './CSS/NavigationBar.css';
import './CSS/Home.css';
import NavigationBar from './Components/NavigationBar'
import Home from './Components/Home'
import RestaurantMap from './Components/RestaurantMap'
import { BrowserRouter, Route } from 'react-router-dom';
import ViewController from './Components/ViewController';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Route path="/Home" exact={true} component={Home}></Route>
        <Route path="/ViewController/:viewSelection" exact={true} component={ViewController}></Route>
        <Route path="/RestaurantMap" exact={true} component={RestaurantMap}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
