import React from 'react';
import './App.css';
import GetRestaurants from './APIs/GetRestaurants';

function App() {
  return (
    <div>
      <h1>부산 가즈아!!!!</h1>
      <div>
        <GetRestaurants />
      </div>
    </div>
  );
}

export default App;
