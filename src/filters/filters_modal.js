import { useEffect, useRef, useState } from "react";
import "./filters.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import {test} from "../test/test";
import Propertytype from "./propertytype";
import Roomsbeds from "./roomsbeds";
import Type from "./type";
import Pricerange from "./pricerange";
import Amenities from "./amenities";
import Bookingoptions from "./bookingoptions";
import Accessibility from "./accessibility";
import Toptier from "./toptier";
import Hostlanguage from "./hostlanguage";
import { useDispatch, useSelector } from "react-redux";
import { set_entire,set_priv,set_shared } from "../redux/placeTypeSlice";
import { add_filter_by_rooms, add_filter_by_beds, add_filter_by_bathrooms } from "../redux/rooms_slider";
import { add_property_type } from "../redux/propertyTypeSlice";




const Filters = ({setShow}) => {
    
    const dispatch = useDispatch();
    const updated_number = useSelector(state=> state.filteredItemsSlice.filtered_properties)


    const core = useRef();

    const [temporary_entire, setTemporaryEntire] = useState("a");
    const entire = useSelector(state => state.placeTypeSlice.entire)
    
    
    const [temporary_priv, setTemporaryPriv] = useState("a");
    const priv = useSelector(state => state.placeTypeSlice.priv)

    const [temporary_shared, setTemporaryShared] = useState("a");
    const shared = useSelector(state => state.placeTypeSlice.shared)


    const [temporary_rooms, setTemporaryRooms] = useState(null);
    const [temporary_beds, setTemporaryBeds] = useState(null);
    const [temporary_bathrooms, setTemporaryBathrooms] = useState(null);

    const [temporary_property_types, setTemporaryPropertyTypes] = useState([]);

    const arr2 = [temporary_entire,temporary_priv,temporary_shared]
    const [temporary_total, setTemporaryTotal] = useState(620);


    const filtered_properties = [];

    useEffect(()=>{    

        if (entire.payload)
        {setTemporaryEntire(entire.payload)}
        if (priv.payload)
        {setTemporaryPriv(priv.payload)}
        if (shared.payload)
        {setTemporaryShared(shared.payload)}


        test.forEach(property => {
            let eligible_by_room = true;
            let eligible_by_beds = true;
            let eligible_by_bathrooms = true;
            let eligible_by_property_type = true;
            let eligible_by_place_type = true;

            if(temporary_rooms && parseInt(temporary_rooms)!== 0 && property.numberofrooms !== parseInt(temporary_rooms))
            {
                eligible_by_room=false
            }
            if(temporary_beds && parseInt(temporary_beds)!== 0 && property.numberofbeds !== parseInt(temporary_beds))
            {
                eligible_by_beds=false;
            }
            if(temporary_bathrooms && parseInt(temporary_bathrooms)!== 0 && property.numberofbathrooms !== parseInt(temporary_bathrooms))
            {
                eligible_by_bathrooms= false;
            }

            let z = 0;
            arr2.forEach(element => {
                if(element === "a")
                {z = z+1}
            });

            if(z !== 3 && !arr2.includes(property.type))
            {
               eligible_by_place_type = false;
            };

            if(temporary_property_types.length>0 && !temporary_property_types.includes(property.propertytype))
            {
                eligible_by_property_type=false
            }
            




            if(eligible_by_room  && eligible_by_beds && eligible_by_bathrooms 
                && eligible_by_place_type && eligible_by_property_type)
            {filtered_properties.push(property)}
            
        });
        // dispatch(updated_filtered_items(filtered_properties.length))

        // setShadow(filtered_properties)
        setTemporaryTotal(filtered_properties.length)
        
    },[temporary_rooms,temporary_beds,temporary_bathrooms,temporary_entire,
        temporary_priv,temporary_shared, temporary_property_types]);
    

    useEffect(()=>{
        const outside_core = (event) => {
                    if(!core.current.contains(event.target))
                    {
                        setShow(false)
                    }
        }
        document.addEventListener("mousedown", outside_core)

    },[]);


    const handle_show = () => {
        setShow(false)
        if(temporary_entire!=="a")
        {dispatch(set_entire(temporary_entire))}
        if(temporary_priv!=="a")
        {dispatch(set_priv(temporary_priv))}
        if(temporary_shared!=="a")
        {dispatch(set_shared(temporary_shared))}

        if(temporary_rooms)
        {dispatch(add_filter_by_rooms(temporary_rooms))}

        if(temporary_beds)
        {dispatch(add_filter_by_beds(temporary_beds))}

        if(temporary_bathrooms)
        {dispatch(add_filter_by_bathrooms(temporary_bathrooms))}

        if(temporary_property_types)
        {
            dispatch(add_property_type(temporary_property_types))
  
        }
        

    }

    
    return ( 

            <div className="panel">
                
                <div className="panel_shell" ref={core}>
                    <div className="panel_shell_title">
                        <button onClick={() => {setShow(false)}}>
                            <FontAwesomeIcon style={{color:"gray"}} size={"xl"} icon={faClose}/>
                        </button>
                        <div className="panel_shell_title_text">Filters</div>
                    </div>
                    <div className="panel_shell_options">

                            <Pricerange/>
                            <Type
                                temporary_entire={temporary_entire}
                                setTemporaryEntire = {setTemporaryEntire}
                                temporary_priv={temporary_priv}
                                setTemporaryPriv={setTemporaryPriv}
                                temporary_shared={temporary_shared}
                                setTemporaryShared={setTemporaryShared}

                                
                            />
                            <Roomsbeds
                                temporary_rooms={temporary_rooms}
                                setTemporaryRooms={setTemporaryRooms}

                                temporary_beds={temporary_beds}
                                setTemporaryBeds={setTemporaryBeds}

                                temporary_bathrooms={temporary_bathrooms}
                                setTemporaryBathrooms={setTemporaryBathrooms}
                            />
                            <Propertytype
                                    temporary_property_types={temporary_property_types}
                                    setTemporaryPropertyTypes={setTemporaryPropertyTypes}
                            />
                            <Amenities/>
                            <Bookingoptions/>
                            <Accessibility/>
                            <Toptier/>
                            <Hostlanguage/>
                    </div>
                    <div className="panel_shell_clear">
                        <div> 
                            
                            <button className="clear_all"><b><u>Clear all</u> </b>  </button>
                            <button 
                            onClick={handle_show}
                            className="show_options"><b>Show {temporary_total} homes </b>  </button>
                        </div>
                    </div>
                    
                </div>
            
            </div>

     );
}
 
export default Filters;