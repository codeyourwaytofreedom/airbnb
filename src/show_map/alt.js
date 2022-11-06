import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '1300px',
  height: '600px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function Alt() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBmI8P3BdqpSutD802D5aFp4O79vc23OHM"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default Alt