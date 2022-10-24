import { useEffect, useRef, useState } from "react";
import "./filters.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import {repetition_array, min, max, av, test} from "../test/test";
import Propertytype from "./propertytype";
import Roomsbeds from "./roomsbeds";
import Type from "./type";
import Pricerange from "./pricerange";
import Amenities from "./amenities";
import Bookingoptions from "./bookingoptions";
import Accessibility from "./accessibility";
import Toptier from "./toptier";
import Hostlanguage from "./hostlanguage";



const Filters = ({setShow}) => {
    
    const[number_of_rooms, setRoom] = useState(null);
    const[number_of_beds, setBeds] = useState(null);
    const[number_of_bathrooms, setBathrooms] = useState(null);

    console.log("number_of_rooms",number_of_rooms);
    console.log("number_of_beds",number_of_beds);
    console.log("number_of_bathrooms",number_of_bathrooms);
    
    useEffect(()=>{        

    },[]);
    

    const core = useRef();

    useEffect(()=>{
        const outside_core = (event) => {
                    if(!core.current.contains(event.target))
                    {setShow(false)}
        }
        document.addEventListener("mousedown", outside_core)

    },[]);


    const [shadow, setShadow] = useState(test);
    
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
                            <Type shadow={shadow} setShadow={setShadow}></Type>

                            <Roomsbeds shadow={shadow} setShadow={setShadow}
                            number_of_rooms={number_of_rooms}
                            setRoom={setRoom}
                            setBeds={setBeds}
                            setBathrooms={setBathrooms}
                            />
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
                            <button className="show_options"><b>Show {shadow.length} homes </b>  </button>
                        </div>
                    </div>
                    
                </div>
            
            </div>

     );
}
 
export default Filters;