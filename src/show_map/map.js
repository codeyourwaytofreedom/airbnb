import { GoogleMap, InfoBox, LoadScript,Marker, InfoWindow } from "@react-google-maps/api";
import { useSelector,useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { test } from "../test/test";
import { updated_filtered_items } from "../redux/filteredItemsSlice";
import { useRef } from "react";
import "./default.css";
import "./show_map.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";



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
      lat: 38.745,
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
    const [z, setZ] = useState(6);
    const [center, setCenter] = useState({
      lat: 39, 
      lng: 35
    })

    const [clicked_marker, setClicked_marker] = useState(null);

    

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
    const test_positions = [
                          {
                          lat: 39.745,
                          lng: 37.523},
                            {
                              lat: 37.745,
                              lng: 32.523
                            },
                            {
                              lat: 39.745,
                              lng: 27.523
                            }]
                            
                            const infowin_positions = [
                              {
                              lat: 40.745,
                              lng: 38.523},
                                {
                                  lat: 38.745,
                                  lng: 33.523
                                },
                                {
                                  lat: 40.745,
                                  lng: 28.523
                                }]

        
        
                                const [img_index, setIndex] = useState(0);
    
                                const handle_index_left = (e) => {
                                  e.stopPropagation();
                                    if(img_index===0)
                                    {setIndex(0)}
                                    else{setIndex(img_index-1)}
                                    
                                }
                            
                                const handle_index_right = (e) => {
                                  e.stopPropagation();
                                    if(img_index===9)
                                    {setIndex(9)}
                                    else{setIndex(img_index+1)}
                                }
                                
                                const nav_to = useNavigate();
                                const handle_infowin_click = (e) => {
                                  console.log(e)
                                  nav_to('/pagefrommapclick');
                                }

                                

                                
                                return (
          
          <LoadScript
            googleMapsApiKey="AIzaSyBmI8P3BdqpSutD802D5aFp4O79vc23OHM"
          >
            <GoogleMap
              mapContainerClassName="map"
              center={center}
              zoom={6}
              onZoomChanged={handle_zoom_change}
              ref={mp}
              onLoad={map => handle_load(map)}
              onCenterChanged={handle_center_changed}
              zoomControl= {false}
              onDragEnd={handle_drag_end}
              
              
              
            > 
              <>
              
                <Marker position={{lat:39, lng:33}} label={"Zoom: "+z} icon={marker_image
                  }>
                </Marker>
               

                {shadow && shadow.slice(0,a).map((element, index) =>
                    <Marker onClick= {() => setClicked_marker(index)} position={element.position}
                        key={index}  icon={marker_image} label={test_positions[index].lat.toString().substring(0,2)+ " : "+ test_positions[index].lng.toString().substring(0,2)}
                  >         
                  </Marker>
                  
                )}

                {shadow && shadow.slice(0,a).map((element, index) =>
                
                  clicked_marker === index ? 
                <InfoWindow position={element.position} key={index}>
                            <div className="infobox" onClick={(e)=>handle_infowin_click(e)}>
                                <div className="property_image" key={index}>
                                    <img src={element.images[img_index]} alt="1" />
                                    <div className="back" onClick={(e)=>handle_index_left(e)}
                                    style={{visibility: img_index===0 ? "hidden" : "visible"}}
                                    >
                                        <FontAwesomeIcon style={{color:"black"}} size={"l"} icon={faChevronLeft}/>
                                    </div>
                                    <div className="forth" onClick={(e)=>handle_index_right(e)}
                                    style={{visibility: img_index===9 ? "hidden" : "visible"}}
                                    >
                                        <FontAwesomeIcon style={{color:"black"}} size={"l"} icon={faChevronRight}/>
                                    </div>
                                </div>
                                <h1>TEST</h1>
                            </div>                     
                  </InfoWindow>
                  : null
                )
                }
                

              </>
            </GoogleMap>
          </LoadScript>
        )
      
    }
 
export default Map;




// lat: randomNumberInRange(21,59), lng: randomNumberInRange(-9,75) 