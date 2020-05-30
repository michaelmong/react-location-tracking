import React, {useState} from 'react';
import Child1 from './child1';

const App = () => {
    const [userID, setUserID] = useState("test");

    const getX = (value) => {
        setUserID(value);
    }

    return (
        <div>
            <Child1 getChildChange={getX} />
            {userID}
        </div>
    );
}

export default App;