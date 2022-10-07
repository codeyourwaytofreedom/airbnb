import { useRef, useState, useEffect } from "react";
import "./Top_roll.css";
import rolling_options from "./Top_roll_options";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Top_roll = () => {

    const [step,setStep] = useState(0);

    const[ww, setWW] = useState();
    const [hm, setHm] = useState();
    
    
    function get_positions() {
            const { innerWidth: width, innerHeight: height } = window;
            setWW(width);
            setHm(parseInt(width*0.75/90));
            setStep(step)
          
    }

      useEffect(() => {
            get_positions();
        }, []);
        
        useEffect(() => {
            window.addEventListener("resize", get_positions);
          }, []);

    
    const handle_index_left = () => {
        setStep(step-1)
    }

    const handle_index_right = () => {
        if(step+hm===24)
        {setStep(step);  
        }
        else{setStep(step+1)}
        
    }


    return ( 
        <div className="top_roll">
            <div className="top_roll_left-shield"></div>
            <div className="top_roll_content"    
            >   


                <div className="top_roll_content_test" 
                style={{ transitionDelay:"0.2s"}}
                    >
                        
                    {
                    rolling_options.slice(step,hm+step).map((o) => (
                        <button className="top_roll_content_button">
                            <div className="top_roll_content_button_kernel">
                                <span className="top_roll_content_button_kernel_icon">
                                    <img src={o.icon} alt="x" />
                                </span>
                                <span className="top_roll_content_button_kernel_text">XXX</span>
                            </div>
                        </button>
                    ))
                    }
                    
                </div>
                
            </div>
                    
            <div className="top_roll_content_back" onClick={handle_index_left}
                style={{opacity:step===20 ? "0" : "1"}}
                
            >
                <FontAwesomeIcon style={{color:"black"}} size={"l"} icon={faChevronLeft}/>
            </div>
            <div className="shadow_left" style={{display:step===0 ? "none" : "block"}}>
            </div>

            <div className="top_roll_content_forth" onClick={handle_index_right}
                
                style={{opacity:step===-107 ? "0" : "1"}}
            >
                <FontAwesomeIcon style={{color:"black"}} size={"l"} icon={faChevronRight}/>
            </div>
            <div className="shadow_right" style={{display:step===-107 ? "none" : "block"}}>
            </div>
            
            <div className="top_roll_control">
            </div>

            <div className="top_roll_right-shield"></div>
            
            
            
            <h1 style={{position:"absolute",top:"200px", left:"20%"}}>
                     Ekran boyutu: {ww}
            </h1>

            <h1 style={{position:"absolute",top:"240px", left:"20%"}}>
                     Sığan öğe sayısı: {hm}
            </h1>

            <h1 style={{position:"absolute",top:"280px", left:"20%"}}>
                     {step} ile {step+hm} arasını gösteriyor
            </h1>

            <h1 style={{position:"absolute",top:"320px", left:"20%"}}>
                     Step: {step}
            </h1>

            

        </div>
     );
}
 
export default Top_roll;