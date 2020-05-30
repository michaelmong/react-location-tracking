import React, { useState, useEffect }  from 'react';
import GetLocation from './GetLocation';
import LoginFacebook from './Facebook';
import './App.css';

const App = () => {
  const [userID, setUserID] = useState("0");

  const setNewUserID = (e) => {
    console.log(e);
  }
  
  return (
    <div className="App">
      <LoginFacebook userID={setNewUserID} />
      <p>{userID}</p>
    {/*<GetLocation />*/}
    </div>
  );
}

export default App;
