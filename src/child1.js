import React, {useState, useEffect} from 'react';

const Child1 = (props) => {
    
    const [email, setEmail] = useState("");

    useEffect(() =>{
        props.getChildChange(email);
    }, [email]);

    return (
        <div>
            <h1>555</h1>
            { if (true) count++; }
        </div>
    );
}

export default Child1;