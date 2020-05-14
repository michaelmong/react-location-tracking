import React, { useState, useEffect } from 'react';

//let i = 1;    /*debug*/

const GetLocation = () => {
    const [latlong, setLatLong] = useState({
        lat: null,
        long: null,
    });

    const updateLocation = (position) => {
        setLatLong({
            lat: position.coords.latitude,
            long: position.coords.longitude
        });
    }

    useEffect(() => {
        const interval = setInterval(() => {navigator.geolocation.getCurrentPosition(updateLocation);/*console.log(i++);*/}, 5000);
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
