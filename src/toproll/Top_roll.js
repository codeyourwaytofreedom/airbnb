import { useState } from "react";
import "./Top_roll.css";
import rolling_options from "./Top_roll_options";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Filters from "../filters/filters_modal";

const Top_roll = () => {

    const [copy_array, setCopy] = useState(rolling_options);
    const [show_filters, setShow] = useState(false);
    // const [times_clicked, setClick] = useState(0);
    // const [screen_wid, setWidth] = useState(window.innerWidth);
    // const [hm, setHM] = useState(parseInt(screen_wid*0.75/100));
    // const[change_in_hm, setChange] = useState(hm-parseInt(screen_wid*0.75/100));
    // const [w_size_change, setWchange] = useState(0)


    const moveElementsToEndOfArray = () => {
        let n = copy_array.length;
        let first_2_elements = copy_array.slice(0, 2);
        let remaining_elements = copy_array.slice(2, n);   
        setCopy([...remaining_elements, ...first_2_elements]);
        }

        const moveElementsTobeginningofArray = () => {
        let n = copy_array.length;
        let last_2_elements = copy_array.slice(n-2, n);
        let remaining_elements = copy_array.slice(0, n-2);
        setCopy([ ...last_2_elements, ...remaining_elements]);
        }    
        
    const handle_index_left = () => {
        moveElementsTobeginningofArray();
        // setClick(times_clicked-1);


    }

    const handle_index_right = () => {
                moveElementsToEndOfArray();
                // setClick(times_clicked+1);
        }

    return ( 
        <div className="top_roll">

            <div className="top_roll_left-shield"></div>

            <div className="top_roll_content">   

                <div className="top_roll_content_test">
                    {
                    copy_array.map((o,index) => (
                        <button className="top_roll_content_button">
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
                    
            <div className="top_roll_content_back" onClick={handle_index_left}>
                <FontAwesomeIcon style={{color:"black"}} size={"l"} icon={faChevronLeft}/>
            </div>
            
            {/* shadows */}
            <div className="shadow_left"></div>
            <div className="shadow_right"></div>
            
            
            <div className="top_roll_control">

                        <div className="top_roll_control_arrow">
                            <div className="top_roll_control_arrow_forth" onClick={handle_index_right}>
                                <FontAwesomeIcon style={{color:"black"}} size={"xs"} icon={faChevronRight}/>
                            </div>
                        </div>

                        <div className="top_roll_control_filter" onClick={() => {setShow(true)}}>   
                                <div className="top_roll_control_filter_howmany">2</div>                             
                                <div className="top_roll_control_filter_icon">
                                    <img src={require("../filters/filter.png")} alt="xx" />
                                </div>
                                <div className="top_roll_control_filter_text">Filters</div>    
                        </div>
            </div>

            <div className="top_roll_right-shield"></div>
            
            {
                show_filters &&
                <Filters setShow={setShow}></Filters>
            }
            
            
        </div>
     );
}
 
export default Top_roll;