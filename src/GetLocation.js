import React, { useState, useEffect } from 'react';
import axios from 'axios';

//let i = 1;    /*debug*/

const GetLocation = (props) => {
    const [data, setData] = useState({
        lat: 0,
        long: 0,
        id: props.id,
    });

    const updateLocation = (position) => {
        setData({
            lat: position.coords.latitude,
            long: position.coords.longitude,
            id: props.id,
        });
    }

    const postDataAxios = async () => {
        const response = await axios.post(
            'http://localhost:3773/api',
            data,
            {
                headers: { 'Content-Type': 'application/json' },
//                httpsAgent: new https.Agent({ rejectUnauthorized: false })
            }
        ).then((res) => console.log(res.data));
    };

    useEffect(() => {
        const interval = setInterval(() => {navigator.geolocation.getCurrentPosition(updateLocation);/*console.log(i++);*/}, 5000);
        postDataAxios();
        return () => clearInterval(interval);
    });

    return(
        <div>
            <p>ID: {data.id} </p>
            <p>Latitude: {data.lat} </p>
            <p>Longitude: {data.long} </p>
            <p>{props.id}</p>
        </div>
    );
}

export default GetLocation;
