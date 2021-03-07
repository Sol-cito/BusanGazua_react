import React from 'react';
import './App.css';
import NavigationBar from './Components/NavigationBar'
import ViewOfRestaurants from './Components/ViewOfRestaurants'
import Home from './Components/Home'
import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <HashRouter>
        <NavigationBar />
        <Route path="/Home" exact={true} component={Home}></Route>
        <Route path="/ViewOfRestaurants" exact={true} component={ViewOfRestaurants}></Route>
      </HashRouter>
    </div>
  );
}

export default App;
