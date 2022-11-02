import { GoogleMap, LoadScript,Marker } from "@react-google-maps/api";

const Map = () => {
    
    const center = {
      lat: -3.745,
      lng: -38.523
    };

        return (
          <LoadScript
            googleMapsApiKey="AIzaSyBmI8P3BdqpSutD802D5aFp4O79vc23OHM"
          >
            <GoogleMap
              mapContainerClassName="map"
              center={center}
              zoom={10}
            >
              { /* Child components, such as markers, info windows, etc. */ }
              <></>
            </GoogleMap>
          </LoadScript>
        )
      
    }
 
export default Map;