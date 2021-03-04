import React from 'react';
import './App.css';
import './APIs/Restaurants'
import Restaurants from './APIs/Restaurants';

function App() {
  return (
    <div>
      <h1>부산 가즈아!!!!</h1>
      <div>
        <Restaurants />
      </div>
    </div>
  );
}

export default App;
