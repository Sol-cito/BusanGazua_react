import React from 'react';
import './CSS/App.css';
import NavigationBar from './Components/NavigationBar'
import ViewOfRestaurants from './Components/Views/ViewOfRestaurants'
import ViewOfPlaces from './Components/Views/ViewOfPlaces'
import ViewOfFestivals from './Components/Views/ViewOfFestivals'
import Home from './Components/Home'
import RestaurantMap from './Components/RestaurantMap'
import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <HashRouter>
        <NavigationBar />
        <Route path="/Home" exact={true} component={Home}></Route>
        <Route path="/ViewOfRestaurants" exact={true} component={ViewOfRestaurants}></Route>
        <Route path="/ViewOfPlaces" exact={true} component={ViewOfPlaces}></Route>
        <Route path="/ViewOfFestivals" exact={true} component={ViewOfFestivals}></Route>
        <Route path="/RestaurantMap" exact={true} component={RestaurantMap}></Route>
      </HashRouter>
    </div>
  );
}

export default App;
