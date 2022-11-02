import { GoogleMap, LoadScript,Marker } from "@react-google-maps/api";

const Map = () => {
    
    const center = {
      lat: 23.745,
      lng: 17.523
    };

        return (
          <LoadScript
            googleMapsApiKey="AIzaSyBmI8P3BdqpSutD802D5aFp4O79vc23OHM"
          >
            <GoogleMap
              mapContainerClassName="map"
              center={center}
              zoom={3}
              
            >
              <>
                <Marker position={{lat:39, lng:33}} label={"257"} icon={'http://labs.google.com/ridefinder/images/mm_20_yellow.png'}/>
                <Marker position={{lat:38, lng:42}} label={"547"}/>
                <Marker position={{lat:36, lng:29}} label={"633"}/>
                <Marker position={{lat:41, lng:28}} label={"752"}/>
              </>
            </GoogleMap>
          </LoadScript>
        )
      
    }
 
export default Map;