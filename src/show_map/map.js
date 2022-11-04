import { GoogleMap, InfoBox, LoadScript,Marker } from "@react-google-maps/api";
import { useSelector,useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { test } from "../test/test";
import { updated_filtered_items } from "../redux/filteredItemsSlice";
import { useRef } from "react";
import Carousel from "../content/carousel";
import "../content/content.css";


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
  
    const cnt = {
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

    const mrk = <button>Hello Marker</button>

    const mp = useRef();
    const [a, setA] = useState(3); 
    const [z, setZ] = useState(3);
    const [center, setCenter] = useState({
      lat: 23, 
      lng: 17
    })

    const [clicked_marker, setClicked_marker] = useState("");

    

    const handle_zoom_change = () => {

      if(mp.current)
      {
        setZ(mp.current.zoom)
      }
    }

    // on mapload, get an instance of the map to extract map data
    const handle_load = (map) => {
      mp.current=map      
    }

    const handle_center_changed = () => {
      // if(mp.current)
      // {const newPos = mp.current.getCenter().toJSON();
      //   console.log(newPos)
      // }
    }

    const handle_drag_end = () => {
      if(mp.current)
      {const newPos = mp.current.getCenter().toJSON();
        console.log(newPos.lat)
        setCenter(newPos)
      }
    }

        return (
          <LoadScript
            googleMapsApiKey="AIzaSyBmI8P3BdqpSutD802D5aFp4O79vc23OHM"
          >
            <GoogleMap
              mapContainerClassName="map"
              center={center}
              zoom={z}
              onZoomChanged={handle_zoom_change}
              ref={mp}
              onLoad={map => handle_load(map)}
              onCenterChanged={handle_center_changed}
              zoomControl= {false}
              onDragEnd={handle_drag_end}
              
              
              
            >
              <>
              
                <Marker position={{lat:39, lng:33}} label={"Zoom: "+z} icon={marker_image}>
                </Marker>

                {shadow && shadow.slice(0,a).map(element =>
                  <Marker onClick= {() => setClicked_marker(element.propertytype)} position={{lat: randomNumberInRange(35,41), lng: randomNumberInRange(25,44) }}
                          icon={marker_image} label={center.lat.toString().substring(0,2)+"--"+center.lng.toString().substring(0,2)}
                  >
                        <InfoBox position={center}>
                    <div style={{width:"200px", height:"200px", backgroundColor:"blue", color:"white", fontSize:"18px"}}>
                                  {clicked_marker}
                    </div>                    
                </InfoBox>

                  </Marker>
                  )}

              </>
            </GoogleMap>
          </LoadScript>
        )
      
    }
 
export default Map;