import { useEffect, useRef, useState } from "react";
import "./filters.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import {repetition_array, min, max, av} from "../test/test";
import Propertytype from "./propertytype";
import Roomsbeds from "./roomsbeds";
import Type from "./type";
import Pricerange from "./pricerange";
import Amenities from "./amenities";


const Filters = ({setShow}) => {

    const core = useRef();
    const[type_house, addTypeHouse] = useState(false);
    const[type_flat, addTypeFlat] = useState(false);
    const[type_ghouse, addTypeGhouse] = useState(false);
    const[type_hotel, addTypeHotel] = useState(false);



    
    const [pricemin, setPricemin] = useState(min);
    const [pricemax, setPricemax] = useState(max);
    let gap = 10;


    const handle_price_min = (event) => {
        setPricemin(event.target.value)
    }

    const handle_price_max = (event) => {
        setPricemax(event.target.value)
    }

    const handle_input_min = (event) => {
        if(pricemax- event.target.value < gap) 
        {event.target.value=pricemin}
    }

    const handle_input_max = (event) => {
        console.log(event.target.value)
        if(event.target.value-pricemin < gap)
        {
            console.log("must stop here");
            console.log(pricemax)
            event.target.value = pricemax;
        }

    }

    const handle_house_type = () => {
        if(type_house===false)
        {addTypeHouse(true)}
        else{addTypeHouse(false)}
    }

    const handle_flat_type = () => {
        if(type_flat===false)
        {addTypeFlat(true)}
        else{addTypeFlat(false)}
    }

    const handle_ghouse_type = () => {
        if(type_ghouse===false)
        {addTypeGhouse(true)}
        else{addTypeGhouse(false)}
    }

    const handle_hotel_type = () => {
        if(type_hotel===false)
        {addTypeHotel(true)}
        else{addTypeHotel(false)}
    }

    useEffect(()=>{
        const outside_core = (event) => {
                    if(!core.current.contains(event.target))
                    {setShow(false)}
        }
        document.addEventListener("mousedown", outside_core)

    },[]);

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

                            <Pricerange
                                av={av}
                                repetition_array={repetition_array}
                                min={min}
                                max={max}
                                pricemin={pricemin}
                                pricemax={pricemax}
                                handle_input_min={handle_input_min}
                                handle_input_max={handle_input_max}
                                handle_price_min={handle_price_min}
                                handle_price_max={handle_price_max}
                            />
                            <Type></Type>
                            <Roomsbeds/>
                            <Propertytype 
                                handle_hotel_type={handle_hotel_type}
                                handle_flat_type={handle_flat_type}
                                handle_ghouse_type={handle_ghouse_type}
                                handle_house_type={handle_house_type}
                                type_flat={type_flat}
                                type_house={type_house}
                                type_ghouse={type_ghouse}
                                type_hotel={type_hotel}
                            />
                            <Amenities/>


                            <div className="panel_shell_options--bookingoptions">
                                Booking options
                            </div>
                            <div className="panel_shell_options--accessibility">
                                Accessibility features
                            </div>
                            <div className="panel_shell_options--parking">
                                Guest entrance and parking
                            </div>
                            <div className="panel_shell_options--toptier">
                                Top-tier stays
                            </div>
                            <div className="panel_shell_options--language">
                                Host language
                            </div>
                    </div>
                    <div className="panel_shell_clear">
                        <div> <b><u>Clear All</u> </b>  </div>
                                 
                    </div>
                    
                </div>
            
            </div>

     );
}
 
export default Filters;