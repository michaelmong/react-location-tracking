import React, { useState, useEffect }  from 'react';
import LoginFacebook from './Facebook';
import GetLocation from './GetLocation';
import DisplayMap from './DisplayMap';
import './App.css';

const App = () => {
  const [userID, setUserID] = useState("0");
  const [mode, setMode] = useState("t");

  const setNewUserID = (id) => {
    setUserID(id);
  }
  
  let operationData;

  (userID === "0") ?
  operationData = (
    <div><br />Login to Facebook is for getting your verified email address as an user ID.</div>
  ) :
    (mode === "t") ?
    operationData = (
    <GetLocation id={userID} />
    ) :
    operationData = (
    <DisplayMap id={userID} />
    )

  const handleSwitchMode = (e) => {
    setMode(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>Welcome to Location Tracking Project &copy;</div>
      </header>

      <section className="App-section">
        <div onChange={handleSwitchMode}>
          <input type="radio" name="mode" value="t" checked={mode === "t"} />Track mode
          <input type="radio" name="mode" value="v" checked={mode === "v"} />View mode
        </div>
      </section>

      <article>
        <LoginFacebook newUserID={setNewUserID} />
        { operationData }
      </article>
      
      <footer className="App-footer">
        <div>Scripts by Mongkol Thamwongskul. Powered by React, Node.js and MySQL.</div>
      </footer>
    </div>
  );
}

export default App;

