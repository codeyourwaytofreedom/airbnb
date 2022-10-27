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
    const [temporary_priv, setTemporaryPriv] = useState("a");
    const [temporary_shared, setTemporaryShared] = useState("a");

    const [temporary_rooms, setTemporaryRooms] = useState(null);
    const [temporary_beds, setTemporaryBeds] = useState(null);
    const [temporary_bathrooms, setTemporaryBathrooms] = useState(null);

    const [temporary_property_types, setTemporaryPropertyTypes] = useState([]);


    // console.log("temporary entire: not applied", temporary_entire)
    // console.log("temporary private: not applied", temporary_priv)
    // console.log("temporary shared: not applied", temporary_shared)


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

        if(temporary_property_types.length>0)
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
                            className="show_options"><b>Show {test.length} homes </b>  </button>
                        </div>
                    </div>
                    
                </div>
            
            </div>

     );
}
 
export default Filters;