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
import { approve_filters } from "../redux/approveFiltersSlice";
const Filters = ({setShow}) => {
    
    const dispatch = useDispatch();
    const updated_number = useSelector(state=> state.filteredItemsSlice.filtered_properties)

    const core = useRef();

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
        dispatch(approve_filters())
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
                            <Type></Type>
                            <Roomsbeds/>
                            <Propertytype/>
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
                            className="show_options"><b>Show {updated_number.payload} homes </b>  </button>
                        </div>
                    </div>
                    
                </div>
            
            </div>

     );
}
 
export default Filters;