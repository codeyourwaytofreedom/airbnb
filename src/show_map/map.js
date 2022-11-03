import { GoogleMap, LoadScript,Marker } from "@react-google-maps/api";
import { useSelector,useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { test } from "../test/test";
import { updated_filtered_items } from "../redux/filteredItemsSlice";
import { useRef } from "react";



const Map = () => {

  const number_of_rooms = useSelector(state => state.roomsSlice.nu_room.payload);
  const number_of_beds = useSelector(state => state.roomsSlice.nu_beds.payload);
  const number_of_bathrooms = useSelector(state => state.roomsSlice.nu_bathrooms.payload);

  const selected_property_types = useSelector(state => state.propertyTypeSlice.selected_property_types);

  const [shadow, setShadow] = useState(test);
  

  const filtered_properties = [];

  const entire = useSelector(state => state.placeTypeSlice.entire)
  const priv = useSelector(state => state.placeTypeSlice.priv)
  const shared = useSelector(state => state.placeTypeSlice.shared)
  
  const arr = []

  if (entire.payload)
  {arr.push(entire.payload)}
  if (priv.payload)
  {arr.push(priv.payload)}
  if (shared.payload)
  {arr.push(shared.payload)}

  const arr2 = [];
          arr.forEach(element => {
              if(element && element!=="y")
              {
                  // console.log("item: ", element)
              arr2.push(element)
          }
          });



  const dispatch = useDispatch();

  // console.log(selected_property_types.payload)


  useEffect(()=>{    
      
      test.forEach(property => {
          let eligible_by_room = true;
          let eligible_by_beds = true;
          let eligible_by_bathrooms = true;
          let eligible_by_property_type = true;
          let eligible_by_place_type = true;

          if(number_of_rooms && parseInt(number_of_rooms)!== 0 && property.numberofrooms !== parseInt(number_of_rooms))
          {
              eligible_by_room=false
          }
          if(number_of_beds && parseInt(number_of_beds)!== 0 && property.numberofbeds !== parseInt(number_of_beds))
          {
              eligible_by_beds=false;
          }
          if(number_of_bathrooms && parseInt(number_of_bathrooms)!== 0 && property.numberofbathrooms !== parseInt(number_of_bathrooms))
          {
              eligible_by_bathrooms= false;
          }

          

          if(arr2.length>0 && !arr2.includes(property.type))
          {
             eligible_by_place_type = false;
              
          };




          if(selected_property_types.payload && selected_property_types.payload.length>0 && 
              !selected_property_types.payload.includes(property.propertytype))
          {
              eligible_by_property_type=false
          }
          




          if(eligible_by_room  && eligible_by_beds && eligible_by_bathrooms 
              && eligible_by_place_type && eligible_by_property_type)
          {filtered_properties.push(property)}
          
      });
      dispatch(updated_filtered_items(filtered_properties))

      setShadow(filtered_properties)




      
  },[number_of_rooms,number_of_beds,number_of_bathrooms,entire,priv,shared, selected_property_types]);




  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    const center = {
      lat: 23.745,
      lng: 17.523
    };
    const label = {
      text: "$479",
      color: 'red',
      fontSize: "12px",
      fontWeight:"600",
    }

    const marker_image = require("./marker.png")

    const [a, setA] = useState(11); 
    const [map, setMap] = useState(null)

    const handle_idle = () => {
        }

        return (
          <LoadScript
            googleMapsApiKey="AIzaSyBmI8P3BdqpSutD802D5aFp4O79vc23OHM"
          >
            <GoogleMap
              mapContainerClassName="map"
              center={center}
              zoom={3}
              onZoomChanged={(a) => console.log(a)}
              
              
            >
              <>
                <Marker position={{lat:39, lng:33}} label={label} icon={marker_image} />

                {shadow && shadow.slice(0,a).map(element =>
                  <Marker position={{lat: randomNumberInRange(-17,68), lng: randomNumberInRange(-97,123) }}
                          icon={marker_image} label={label}
                  />
                  )}

              </>
            </GoogleMap>
          </LoadScript>
        )
      
    }
 
export default Map;