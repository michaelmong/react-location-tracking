import React, { useState, useEffect } from 'react';
import axios from 'axios';

//let i = 1;    /*debug*/

const GetLocation = (props) => {
    const [data, setData] = useState({
        lat: 0,
        long: 0,
        id: props.id,
    });
    const [log1, setLog1] = useState("");
    let log1msg = "";
    const [log2, setLog2] = useState("");
    let log2msg = "";
    const[timer, setTimer] = useState(1000);

    const updateLocation = (position) => {
        setData({
            lat: position.coords.latitude,
            long: position.coords.longitude,
            id: props.id,
        });
        setTimer(5000);
    }

    const postDataAxios = async () => {
        const response = await axios.post(
            'http://localhost:8080/api',
            data,
            {
                headers: { 'Content-Type': 'application/json' },
//                httpsAgent: new https.Agent({ rejectUnauthorized: false })
            }
        ).then((res) => {
            log2msg += "done.";
            setLog2(log2msg);
        });
    };

    useEffect(() => {
        log1msg = "Reading location...";
        log2msg = "";
        setLog1(log1msg);
        setLog2(log2msg);
        const interval = setInterval(() => {navigator.geolocation.getCurrentPosition(updateLocation);}, timer);
        log1msg += "done.";
        if ((data.lat == "0") && (data.long == "0")) {
            log2msg = "Preparing data to upload...";
        } else {
            log2msg = "Uploading (user id = " + data.id + ", Latitude = " + data.lat + ", Longitude = " + data.long + ")...";
        }
        setLog1(log1msg);
        setLog2(log2msg);
        postDataAxios();
        return () => clearInterval(interval);
    }, [data]);

    return(
        <div>
            <p>{ log1 }</p>
            <p>{ log2 }</p>
        </div>
    );
}

export default GetLocation;
