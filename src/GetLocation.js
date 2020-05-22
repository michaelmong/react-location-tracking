import React, { useState, useEffect } from 'react';
import axios from 'axios';

//let i = 1;    /*debug*/

const GetLocation = () => {
    const [latlong, setLatLong] = useState({
        lat: 0,
        long: 0,
    });

    const updateLocation = (position) => {
        setLatLong({
            lat: position.coords.latitude,
            long: position.coords.longitude
        });
    }

    const postDataAxios = async () => {
        const response = await axios.post(
            'http://localhost:3773/api',
            latlong,
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
            <p>Latitude: {latlong.lat} </p>
            <p>Longitude: {latlong.long} </p>
        </div>
    );
}

export default GetLocation;
