import { useState } from "react";
import "./Top_roll.css";
import rolling_options from "./Top_roll_options";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Filters from "../filters/filters_modal";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRef } from "react";

const Top_roll = () => {

    const [copy_array, setCopy] = useState(rolling_options);
    const [show_filters, setShow] = useState(false);
    const [howmany, setHowmany] = useState(0)

    const entire = useSelector(state => state.placeTypeSlice.entire)
    const priv = useSelector(state => state.placeTypeSlice.priv)
    const shared = useSelector(state => state.placeTypeSlice.shared)

    const number_of_rooms = useSelector(state => state.roomsSlice.nu_room.payload);
    const number_of_beds = useSelector(state => state.roomsSlice.nu_beds.payload);
    const number_of_bathrooms = useSelector(state => state.roomsSlice.nu_bathrooms.payload);

    const property_types = useSelector(state => state.propertyTypeSlice.selected_property_types.payload);
    
    let number_of_filters_in_place = 0;

    const [track_index, setIndex] = useState(0);

    const the_end = useRef();
    const right_arrow = useRef();

    //to calculate the number of total filters in place
    useEffect(()=> {
        
        if(entire.payload && entire.payload !== "y")
        {
            number_of_filters_in_place++
        }
        if(priv.payload && priv.payload !== "y")
        {
            number_of_filters_in_place++
        }
        if(shared.payload && shared.payload !== "y")
        {
            number_of_filters_in_place++
        }

        if(number_of_rooms && number_of_rooms !== "0")
        {
            number_of_filters_in_place++
        }
        if(number_of_beds && number_of_beds !== "0")
        {
            number_of_filters_in_place++
        }
        if(number_of_bathrooms && number_of_bathrooms !== "0")
        {
            number_of_filters_in_place++
        }
        if(property_types)
        {
            number_of_filters_in_place= number_of_filters_in_place+property_types.length
        }

        setHowmany(number_of_filters_in_place)
    }, [entire, priv, shared, number_of_rooms, number_of_beds, number_of_bathrooms, property_types])


    const moveElementsToEndOfArray = () => {
        let n = copy_array.length;
        let first_2_elements = copy_array.slice(0, 1);
        let remaining_elements = copy_array.slice(1, n);   
        setCopy([...remaining_elements, ...first_2_elements]);
        }

        const moveElementsTobeginningofArray = () => {
        let n = copy_array.length;
        let last_2_elements = copy_array.slice(n-1, n);
        let remaining_elements = copy_array.slice(0, n-1);
        setCopy([ ...last_2_elements, ...remaining_elements]);
        }    
        
    const handle_index_left = () => {
        moveElementsTobeginningofArray();
        setIndex(track_index-1)
    }

    const handle_index_right = () => {
                moveElementsToEndOfArray();
                setIndex(track_index+1)
        }

    return ( 
        <>
            {
                show_filters &&
                <Filters 
                        setShow={setShow}
                        setHowmany={setHowmany}
                />
            }
        <div className="top_roll">

            <div className="top_roll_left-shield"></div>

            <div className="top_roll_content">   

                <div className="top_roll_content_test">

                    <div className="top_roll_content_back" onClick={handle_index_left}>
                        <FontAwesomeIcon style={{color:"black"}} size={"xs"} icon={faChevronLeft}/>
                    </div>

                    {
                    copy_array.map((o,index) => (
                        <button className="top_roll_content_button" key={index} ref={o.text ==="END" ? the_end : null}>
                            <div className="top_roll_content_button_kernel">
                                <span className="top_roll_content_button_kernel_icon">
                                    <img src={o.icon} alt="x" />
                                </span>
                                <span className="top_roll_content_button_kernel_text">{o.text}</span>
                            </div>
                        </button>
                    ))
                    }
                    
                </div>
            </div>
                    
            {/* <div className="top_roll_content_back" onClick={handle_index_left}
                style={{display: track_index===0 ? "none" : "grid"}}
                >
                <FontAwesomeIcon style={{color:"black"}} size={"l"} icon={faChevronLeft}/>
            </div> */}
            
{/* 
            <div className="shadow_left"></div>
            <div className="shadow_right"></div> */}
            
            
            <div className="top_roll_control" ref={right_arrow}>

                        <div className="top_roll_control_arrow">
                            <div className="top_roll_control_arrow_forth" onClick={handle_index_right}
                            >
                                <FontAwesomeIcon style={{color:"black"}} size={"xs"} icon={faChevronRight}/>
                            </div>
                        </div>

                        <div className="top_roll_control_filter" onClick={() => {setShow(true)}}>   
                                <div className="top_roll_control_filter_howmany"
                                style={{display:howmany !== 0 ? "grid" : "none"}}
                                >   {howmany}
                                </div>                             
                                <div className="top_roll_control_filter_icon">
                                    <img src={require("../filters/filter.png")} alt="xx" />
                                </div>
                                <div className="top_roll_control_filter_text">Search</div>    
                        </div>
            </div>

            <div className="top_roll_right-shield"></div>
            
            
            
            
        </div>
        </>
     );
}
 
export default Top_roll;