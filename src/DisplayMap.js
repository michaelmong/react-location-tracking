import React, { useState } from 'react';
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

  const [location, setLocation] = useState({
      lat: 13.7563,
      lng: 100.5018,
  })
  
  const getDataAxios = async () => {
    let httpGetAPI = 'http://localhost:3773/api/' + props.id;
    const response = await axios.get(httpGetAPI).then((res) => {
      console.log(res.data);
    });
  };

  return(
    <GoogleMap
      defaultZoom={8}
      defaultCenter={ location }
    >
    <Marker position={ location } />
    </GoogleMap>
  );}
);

export default DisplayMap;