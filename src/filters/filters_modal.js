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
import { updated_filtered_items } from "../redux/filteredItemsSlice";

const Filters = ({setShow}) => {
    
    const [selected_property_types, setSelectedPropertytypes] = useState([]);
    const[selected_amenities, setSelectedAmenities] = useState([]);

    const number_of_rooms = useSelector(state => state.roomsSlice.nu_room.payload);
    const number_of_beds = useSelector(state => state.roomsSlice.nu_beds.payload);
    const number_of_bathrooms = useSelector(state => state.roomsSlice.nu_bathrooms.payload);

    const selected_place_types = useSelector(state => state.placeTypeSlice.selected_place_types);


    const [shadow, setShadow] = useState(test);

    const filtered_properties = [];

    useEffect(()=>{    

        test.forEach(property => {
            let eligible_by_room = true;
            let eligible_by_beds = true;
            let eligible_by_bathrooms = true;
            let eligible_by_place_type = true;
            let eligible_by_property_type = true;

            if(number_of_rooms && property.numberofrooms !== parseInt(number_of_rooms))
            {
                eligible_by_room=false
            }
            if(number_of_beds && property.numberofbeds !== parseInt(number_of_beds))
            {
                eligible_by_beds=false;
            }
            if(number_of_bathrooms && property.numberofbathrooms !== parseInt(number_of_bathrooms))
            {
                eligible_by_bathrooms= false;
            }


            if(selected_place_types.length>0)
            {
                const arr = [];
                selected_place_types.forEach(element => {
                    arr.push(element.payload)
                });
                if (!arr.includes(property.type))
                {eligible_by_place_type=false}
            }
            



            // if(selected_place_types.length>0 && !selected_place_types.includes(property.type))
            // {eligible_by_place_type=false}

            if(selected_property_types.length>0 && !selected_property_types.includes(property.propertytype))
            {eligible_by_property_type=false}


            if(eligible_by_room  && eligible_by_beds && eligible_by_bathrooms 
                && eligible_by_place_type && eligible_by_property_type)
            {filtered_properties.push(property)}
            
        });
        setShadow(filtered_properties)


        
        
    },[number_of_rooms,number_of_beds,number_of_bathrooms, selected_place_types, selected_property_types]);
    

    const core = useRef();

    useEffect(()=>{
        const outside_core = (event) => {
                    if(!core.current.contains(event.target))
                    {setShow(false)}
        }
        document.addEventListener("mousedown", outside_core)

    },[]);

    const handle_show = () => {
        setShow(false)
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
                            <Type shadow={shadow} setShadow={setShadow}
                            ></Type>

                            <Roomsbeds/>
                            <Propertytype
                            selected_property_types={selected_property_types}
                            setSelectedPropertytypes={setSelectedPropertytypes}
                            />
                            <Amenities
                            selected_amenities={selected_amenities}
                            setSelectedAmenities={setSelectedAmenities}
                            />
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
                            className="show_options"><b>Show {shadow.length} homes </b>  </button>
                        </div>
                    </div>
                    
                </div>
            
            </div>

     );
}
 
export default Filters;