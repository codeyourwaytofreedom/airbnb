import { useState } from "react";
import "./Top_roll.css";
import rolling_options from "./Top_roll_options";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Top_roll = () => {

    const [index, setIndex] = useState(-30);

    const handle_index_left = () => {
        if(index===-30)
            {setIndex(-30)}
        else{
            setIndex(index+500)
        }
         
            
    }

    const handle_index_right = () => {
        if(index===-1530)
            {setIndex(-1530)}
        else{
            setIndex(index-500)
        }
        
    }

    return ( 
        <div className="top_roll">
            <div className="top_roll_left-shield"></div>
            <div className="top_roll_content"    
            >   
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
                                <span className="top_roll_content_button_kernel_text">{o.text}</span>
                            </div>
                        </button>
                    ))
                    }
                </div>
            </div>
                    
                            <div className="top_roll_content_back" onClick={handle_index_left}
                                style={{opacity:index===-30 ? "0" : "1"}}
                            >
                                <FontAwesomeIcon style={{color:"black"}} size={"l"} icon={faChevronLeft}/>
                            </div>
                            <div className="shadow_left" style={{display:index===-30 ? "none" : "block"}}>
                            </div>


            <div className="top_roll_content_forth" onClick={handle_index_right}
                style={{opacity:index===-1530 ? "0" : "1"}}
            >
                <FontAwesomeIcon style={{color:"black"}} size={"l"} icon={faChevronRight}/>
            </div>
            <div className="shadow_right" style={{display:index===-1530 ? "none" : "block"}}>
            </div>
            
            <div className="top_roll_control">
            </div>

            <div className="top_roll_right-shield"></div>
            

        </div>
     );
}
 
export default Top_roll;