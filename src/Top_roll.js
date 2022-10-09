import { useRef, useState, useEffect } from "react";
import "./Top_roll.css";
import rolling_options from "./Top_roll_options";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Top_roll = () => {

    const [copy_array, setCopy] = useState(rolling_options);

    function get_positions() {
          
    }

    function moveElementsToEndOfArray() {
      
        let n = copy_array.length;
      
      
        let first_3_elements = copy_array.slice(0, 3);
      
        let remaining_elements = copy_array.slice(3, n);
      
        setCopy([...remaining_elements, ...first_3_elements]);
      
        console.log(copy_array);
    }





      useEffect(() => {
            // moveElementsToEndOfArray();
        }, []);
        
        useEffect(() => {
            window.addEventListener("resize", get_positions);
          }, []);

    
    const handle_index_left = () => {

    }

    const handle_index_right = () => {
        moveElementsToEndOfArray();
    }

    return ( 
        <div className="top_roll">
            <div className="top_roll_left-shield"></div>
            <div className="top_roll_content" 
            >   


                <div className="top_roll_content_test" 

                    >
                        
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
                    
            <div className="top_roll_content_back" onClick={handle_index_left}
                style={{opacity:5===20 ? "0" : "1"}}
                
            >
                <FontAwesomeIcon style={{color:"black"}} size={"l"} icon={faChevronLeft}/>
            </div>
            <div className="shadow_left" style={{display:5===0 ? "none" : "block"}}>
            </div>

            <div className="top_roll_content_forth" onClick={handle_index_right}
                
                style={{opacity:5===-107 ? "0" : "1"}}
            >
                <FontAwesomeIcon style={{color:"black"}} size={"l"} icon={faChevronRight}/>
            </div>
            <div className="shadow_right" style={{display:5===24 ? "none" : "block"}}>
            </div>
            
            <div className="top_roll_control">
            </div>

            <div className="top_roll_right-shield"></div>
            
            
            
            <h1 style={{position:"absolute",top:"200px", left:"20%"}}>
            </h1>

            <h1 style={{position:"absolute",top:"240px", left:"20%"}}>
            </h1>

            <h1 style={{position:"absolute",top:"280px", left:"20%"}}>
            </h1>

            <h1 style={{position:"absolute",top:"320px", left:"20%"}}>
            </h1>

            <h1 style={{position:"absolute",top:"360px", left:"20%"}}>

            </h1>
            

            

        </div>
     );
}
 
export default Top_roll;