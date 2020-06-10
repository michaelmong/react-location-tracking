import React, { useState, useEffect }  from 'react';
import LoginFacebook from './Facebook';
import GetLocation from './GetLocation';
import DisplayMap from './DisplayMap';
import './App.css';

const App = () => {
  const [userID, setUserID] = useState("anonymous");
  const [mode, setMode] = useState("s");
  const [userMode, setUserMode] = useState("anonymous");

  const setNewUserID = (id) => {
    setUserID(id);
  }
  
  let operationData;

  (mode === "t") ? operationData = (<GetLocation id={userID} />) :
  (mode === "v") ? operationData = (<DisplayMap id={userID} />) :
    (userID === "anonymous") ?
      operationData = (
      <div>
        <br />Login with Facebook is for getting your verified email address as an user ID.
        <br />Facebook login now unavailable due to <a href="https://developers.facebook.com/blog/post/2020/03/24/pausing-individual-verification/">Pausing Individual Verification</a>.
      </div>
      ) :
      operationData = (
        <div>{ userID }</div>
      )

  const handleSwitchMode = (e) => {
    setMode(e.target.value);
  }

  const handleSwitchUser = (e) => {
//    setUser(e.target.value);
      setUserMode("anonymous");
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>Welcome to Location Tracking Project &copy;</div>
      </header>

      <section className="App-section">
        <div onChange={handleSwitchMode}>
          <input type="radio" name="mode" value="s" checked={mode === "s"} />Standby mode
          <input type="radio" name="mode" value="t" checked={mode === "t"} />Track mode
          <input type="radio" name="mode" value="v" checked={mode === "v"} />View mode
        </div>
      </section>

      <article className="App-article">
        <div onChange={handleSwitchUser}>
          <table cellPadding="10" border="0" cellSpacing="10">
            <tr><td><input type="radio" name="userMode" value="anonymous" checked={userMode === "anonymous"} /></td><td align="left">Anonymous</td></tr>
            <tr><td><input type="radio" name="userMode" value="facebook" checked={userMode === "facebook"} /></td><td align="left"><LoginFacebook newUserID={setNewUserID} /></td></tr>
          </table>
        </div>
        { operationData }
      </article>
      
      <footer className="App-footer">
        <div>Scripts by Mongkol Thamwongskul. Powered by React, Node.js and MySQL.</div>
      </footer>
    </div>
  );
}

export default App;

