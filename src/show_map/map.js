import { GoogleMap, LoadScript,Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";

const Map = () => {

  const filtered_properties_from_redux = useSelector(state => state.filteredItemsSlice.filtered_properties.payload)
  console.log(filtered_properties_from_redux)

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const test_array = [1,1,1,1,1,1,1]
  
    const center = {
      lat: 23.745,
      lng: 17.523
    };
    const label = {
      text: "$479",
      color: 'red',
      fontSize: "12px"
    }

    const marker_image = require("./marker.png")

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
                <Marker position={{lat:39, lng:33}} label={label} icon={marker_image} />
                {test_array.map(element =>
                  <Marker position={{lat: randomNumberInRange(5,60), lng: randomNumberInRange(-50,90) }}/>
                  )}
                {/* <Marker position={{lat:38, lng:42}} label={"547"}/>
                <Marker position={{lat:36, lng:29}} label={"633"}/>
                <Marker position={{lat:41, lng:28}} label={"752"}/> */}
              </>
            </GoogleMap>
          </LoadScript>
        )
      
    }
 
export default Map;