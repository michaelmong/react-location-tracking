import React, { useState, useEffect }  from 'react';
import DisplayMap from './DisplayMap';
import './App.css';

let operationData = (<div>555<DisplayMap /></div>);

const App = () => {
  return (
    <div className="App">
      { operationData }
    </div>
  );
}

export default App;

