import { useState } from "react";
import "./Top_roll.css";
import rolling_options from "./Top_roll_options";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Top_roll = () => {

    const [index, setIndex] = useState(0);

    const handle_index_left = () => {
         setIndex(index+320)
            
    }

    const handle_index_right = () => {
        setIndex(index-320)
    }

    return ( 
        <div className="top_roll">
            <div className="top_roll_left-shield"></div>
            <div className="top_roll_content"    
            >   
                <div className="top_roll_content_back" onClick={handle_index_left}
                    style={{display:index===0 ? "none" : "grid"}}
                >
                    <FontAwesomeIcon style={{color:"black"}} size={"l"} icon={faChevronLeft}/>
                </div>
                <div className="top_roll_content_test"
                    style={{ transitionDuration:"0.5s", left:index}}
                    >
                    {
                    rolling_options.map((o) => (
                        <button className="top_roll_content_button">
                            <div className="top_roll_content_button_kernel">
                                <span className="top_roll_content_button_kernel_icon">
                                    <img src={o.icon} alt="x" />
                                </span>
                                <span className="top_roll_content_button_kernel_text">{index}</span>
                            </div>
                        </button>
                    ))
                    }
                </div>

            <div className="top_roll_content_forth" onClick={handle_index_right}
                style={{display:index===-1600 ? "none" : "grid"}}
            >
                <FontAwesomeIcon style={{color:"black"}} size={"l"} icon={faChevronRight}/>
            </div>
            </div>
            
            <div className="top_roll_control">
                <button className="top_roll_fixed-arrow"> ZZ </button>
                <button className="top_roll_fixed-filter">Filters</button>
            </div>

            <div className="top_roll_right-shield"></div>
            

        </div>
     );
}
 
export default Top_roll;