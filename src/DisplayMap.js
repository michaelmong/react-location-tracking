import React, { useState, useEffect } from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import axios from 'axios';

const DisplayMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px`, width: `80%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {

  let timer = 5000;

  const [location, setLocation] = useState({
      lat: 13.7563,
      lng: 100.5018,
  });

  const getDataAxios = async () => {
      let httpGetAPI = 'http://10.148.0.3:8080/api/' + props.id;
//      let httpGetAPI = 'http://localhost:8080/api/' + props.id;
      const response = await axios.get(httpGetAPI).then((res) => {
      let newLocation = { lat: res.data.latitude, lng: res.data.longitude, };
      setLocation(newLocation);
    });
  };

  useEffect(() => {
    const interval = setInterval(() => { getDataAxios(); }, timer);
    return () => clearInterval(interval);
  }, [location])

  let markerData;
  ((location.lat != 13.7563)&&(location.lat != 100.5018)) ? markerData = (<Marker position={location} />) : markerData = (<></>);

  return(
    <div>
    <GoogleMap
      defaultZoom={10}
      defaultCenter={ location }
    >
    { markerData }
    </GoogleMap>
    </div>
  );}
);

export default DisplayMap;