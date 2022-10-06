import { useRef, useState, useEffect } from "react";
import "./Top_roll.css";
import rolling_options from "./Top_roll_options";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Top_roll = () => {


    const [index, setIndex] = useState(-3);
    const x = index+"vw";
    
    const handle_index_left = () => {
        if(index===-3)
            {setIndex(-3)}
        else{
            setIndex(index+26)
        }

    }

    const handle_index_right = () => {
        if(index===-107)
        {setIndex(index)}
        else {setIndex(index-26)};

    }

    return ( 
        <div className="top_roll">
            <div className="top_roll_left-shield"></div>
            <div className="top_roll_content"    
            >   
                <div className="top_roll_content_test"
                    style={{ transitionDuration:"0.5s", left:x}}
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
            </div>
                    
            <div className="top_roll_content_back" onClick={handle_index_left}
                style={{opacity:index===-3 ? "0" : "1"}}
                
            >
                <FontAwesomeIcon style={{color:"black"}} size={"l"} icon={faChevronLeft}/>
            </div>
            <div className="shadow_left" style={{display:index===-3 ? "none" : "block"}}>
            </div>

            <div className="top_roll_content_forth" onClick={handle_index_right}
                
                style={{opacity:index===-107 ? "0" : "1"}}
            >
                <FontAwesomeIcon style={{color:"black"}} size={"l"} icon={faChevronRight}/>
            </div>
            <div className="shadow_right" style={{display:index===-107 ? "none" : "block"}}>
            </div>
            
            <div className="top_roll_control">
            </div>

            <div className="top_roll_right-shield"></div>
            

        </div>
     );
}
 
export default Top_roll;