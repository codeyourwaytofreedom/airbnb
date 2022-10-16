import { useRef, useState, useEffect } from "react";
import "./Top_roll.css";
import rolling_options from "./Top_roll_options";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Top_roll = () => {

    const [step,setStep] = useState(0);
    const { innerWidth: width, innerHeight: height } = window;
    const [hm, sethm] = useState(parseInt(width*0.75/100)+1);
    const e = "repeat(" + hm + ", 1fr)"
    const [alert, setalert] = useState(step+hm);

    function get_positions() {
        const { innerWidth: width, innerHeight: height } = window;
        setalert(parseInt(width*0.75/100)+1-hm)
        sethm(parseInt(width*0.75/100)+1);
        setStep(rolling_options.length-hm);
        console.log(parseInt(width*0.75/100)+1);
        console.log(step);
        if(hm+step >24)
        {
            console.log("24 ü geçti");
            // setStep(step-(parseInt(width*0.75/100)+1-hm));
            console.log(step-alert);   
            setStep(rolling_options.length-hm-(parseInt(width*0.75/100)+1-hm));

        }


          
    }

      useEffect(() => {
            get_positions();
        }, []);
        
        useEffect(() => {
            window.addEventListener("resize", get_positions);
          }, []);

    
    const handle_index_left = () => {
        if(step===0)
        {setStep(0)}
        else{setStep(step-1);}
            
            // sethm(hm-1)
    }

    const handle_index_right = () => {
        if(hm+step+1===25)
        {setStep(step);
        sethm(hm);
        }
        else{setStep(step+1)}
    }

    // step + hm = 23 ise sağı kapat
    return ( 
        <div className="top_roll">
            <div className="top_roll_left-shield"></div>
            <div className="top_roll_content"    
            >   


                <div className="top_roll_content_test" 
                style={{ transitionDelay:"0.4s",
                        gridTemplateColumns:e
                    }}
                    >
                        
                    {
                    rolling_options.slice(step,step+hm).map((o) => (
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
            <div className="shadow_right" style={{display:hm+step===24 ? "none" : "block"}}>
            </div>
            
            <div className="top_roll_control">
            </div>

            <div className="top_roll_right-shield"></div>
            
            
            
            <h1 style={{position:"absolute",top:"200px", left:"20%"}}>
                  HM:  {hm}
            </h1>

            <h1 style={{position:"absolute",top:"240px", left:"20%"}}>
                 Step:   {step}
            </h1>

            <h1 style={{position:"absolute",top:"280px", left:"20%"}}>
               Change:  {alert}
            </h1>

            <h1 style={{position:"absolute",top:"320px", left:"20%"}}>
            </h1>

            <h1 style={{position:"absolute",top:"360px", left:"20%"}}>

            </h1>
            

            

        </div>
     );
}
 
export default Top_roll;