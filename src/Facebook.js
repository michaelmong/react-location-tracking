import React, { useState, useEffect } from 'react';
import FacebookLoginBtn from 'react-facebook-login';

const LoginFacebook = (props) => {
    const [state, setState] = useState({
        auth: false,
        name: '',
        email: 'anonymous',
        picture: '',
    });

    function componentClicked() {
        console.log("Facebook Btn Clicked");
    }

    function responseFacebook(response) {
        console.log(response);
        if (response.state !== 'unknown') {
            setState({
                auth: true,
                name: response.name,
                email: response.email,
                picture: response.picture.data.url,
            })
        }
    }

    let facebookData;

    state.auth ?
        facebookData = (
            <></>
        ) :
        facebookData = (
            <FacebookLoginBtn
                isDisabled = { true }
                appId = "370434600550192"
                autoLoad = { false }
                fields = "name, email, picture"
                onClick = { componentClicked }
                callback = { responseFacebook } />
        )

    useEffect(() => {
            props.newUserID(state.email);
    }, [state.email]);
    
    return(
        <div>
            { facebookData }
        </div>
    );
    
};

export default LoginFacebook;