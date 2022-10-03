import "./signup-modal.css";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import codes from "./CountryCodes.json";





const Signup = ({setSM}) => {

    function handle_code(e) {
        setContry("+"+e.target.value.match(/(\d+)/)[0])
        console.log((e.target.value).match(/(\d+)/)[0])
    }



    // function handle_input_change(e){
    //     if(e.target.value.length>0)
    //     { setFill(false) }
    // }

    // onChange={(e)=> handle_input_change(e)} 

    let modal_ref = useRef();
    const [selected_cont, setContry] = useState("+93")

    const fcs = useRef();
    const [focused, setFocus] = useState(false)

    function handle_focus (){
        fcs.current.focus();
        setFocus(true);
        
    };
    const [input_length, setLength] = useState(0);

    function input_focus(e){
        setLength(e.target.value.length);
    }
    function input_blur(e){
        setLength(e.target.value.length);
        setFocus(false);
    }

    function input_change(e){
        setLength(e.target.value.length);
    }

    useEffect( () => {
    const outclickhandler = (event) => {

                            if (!modal_ref.current.contains(event.target))
                            {
                                setSM(false);
                            }
                            // if (!fcs.current.contains(event.target))
                            // {
                            //     setFocus(false);
                            // }
                        }

    document.addEventListener("mousedown", outclickhandler );

    return () => {
        document.removeEventListener("mousedown", outclickhandler)
    }
    });

    return ( 
        <div className="md-bg">
                <div className="md-bg-inner" ref={modal_ref}>
                        <div className="md-bg-inner_title">
                            <button onClick={()=> setSM(false)}>
                                <FontAwesomeIcon style={{color:"gray"}} size={"xl"} icon={faClose}/>
                            </button>
                             Log in or Sign up
                        </div>
                        <div className="md-bg-inner_down">
                                <div className="md-bg-inner_welc"><h3>Welcome to Airbnb</h3></div>
                                <div className="md-bg-inner_form">
                                    
                                    <form action="">
                                        <div className="md-bg-inner_form_double">
                                            <span className="md-bg-inner_form_select_country">Country/Region</span>
                                            <select onChange={(e) => handle_code(e)} className="md-bg-inner_form_select">
                                                    {
                                                        codes.map((c) => (

                                                            <option key={c.code}>{c.name} ({c.dial_code})</option>
                                                        
                                                        ))
                                                    }
                                                </select> <br></br>
                                            
                                            <div className="md-bg-inner_form_input_triple" onClick={handle_focus} 
                                                style={{border:focused ? "2px solid black" : "none",
                                                        borderRadius: focused ? "10px" : "0"}}>
                                                <input onFocus={ (e)=>input_focus(e)} onBlur={(e)=>input_blur(e)}
                                                        onChange={ (e)=>input_change(e)}
                                                        className="md-bg-inner_form_input_triple_input" type="text" ref={fcs} />
                                                <div  style={{top: focused===true ? "5px" : input_length>0 ?  "5px" : "15px",
                                                                alignItems: focused ? "flex-start" : "center",
                                                            fontSize: focused===true ? "12px" : input_length>0 ? "12px": "14px"
                                                            }}
                                                      className="md-bg-inner_form_input_triple_phone">Phone number</div>
                                                <div style={{display: focused ? "flex" : input_length>0 ? "flex": "none",
                                                            color: input_length>0 ? "#222222": "gray"
                                                            }} className="md-bg-inner_form_input_triple_code">{selected_cont}</div>
                                            </div>
                                            
                                        </div>
                                        <div className="md-bg-inner_form_reminder">We'll call or text you to confirm your number. Standard message and data rates apply. 
                                        <span> <u> <b>Privacy Policy</b> </u></span> </div>
                                        <button type="submit">Continue</button>
                                        <div className="or">
                                            <span className="or_line"></span>
                                            <span className="or_or">or</span>
                                        </div>
                                    </form>
                                </div>
                                

                                <div className="md-bg-inner_cont">
                                    <button> 
                                        <span className="md-bg-inner_cont_icon">
                                            <svg  xmlns="http://www.w3.org/2000/svg" 
                                                    style={{width:"30px", heigth:"30px"}}
                                                    viewBox="0 0 291.319 291.319">
                                                <g>
                                                    <path style={{fill:"#3B5998"}} d="M145.659,0c80.45,0,145.66,65.219,145.66,145.66c0,80.45-65.21,145.659-145.66,145.659
                                                        S0,226.109,0,145.66C0,65.219,65.21,0,145.659,0z"/>
                                                    <path style= {{fill:"#FFFFFF"}} d="M163.394,100.277h18.772v-27.73h-22.067v0.1c-26.738,0.947-32.218,15.977-32.701,31.763h-0.055
                                                        v13.847h-18.207v27.156h18.207v72.793h27.439v-72.793h22.477l4.342-27.156h-26.81v-8.366
                                                        C154.791,104.556,158.341,100.277,163.394,100.277z"/>
                                                </g>
                                            </svg>
                                        </span> <span>Continue with Facebook</span>
                                    </button>

                                    <button> 
                                        <span className="md-bg-inner_cont_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{width:"25px", heigth:"25px"}}>
                                            <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                                                <path  style={{fill:"#4285F4"}} d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                                                <path  style={{fill:"#34A853"}} d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                                                <path  style={{fill:"#FBBC05"}} d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                                                <path  style={{fill:"#EA4335"}} d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
                                            </g>
                                        </svg>
                                        </span> 
                                        <span>Continue with Google</span>
                                    </button>
                                    <button> 
                                        <span className="md-bg-inner_cont_icon">
                                            
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{width:"25px", heigth:"25px"}} viewBox="0 0 496.255 608.728">
                                            <path style={{fill:"black"}} d="M273.81 52.973C313.806.257 369.41 0 369.41 0s8.271 49.562-31.463 97.306c-42.426 50.98-90.649 42.638-90.649 42.638s-9.055-40.094 26.512-86.971zM252.385 174.662c20.576 0 58.764-28.284 108.471-28.284 85.562 0 119.222 60.883 119.222 60.883s-65.833 33.659-65.833 115.331c0 92.133 82.01 123.885 82.01 123.885s-57.328 161.357-134.762 161.357c-35.565 0-63.215-23.967-100.688-23.967-38.188 0-76.084 24.861-100.766 24.861C89.33 608.73 0 455.666 0 332.628c0-121.052 75.612-184.554 146.533-184.554 46.105 0 81.883 26.588 105.852 26.588z"/></svg>

                                        </span> 
                                        <span>Continue with Apple</span>
                                    </button>
                                    <button> 
                                    <span className="md-bg-inner_cont_icon">
                                        <FontAwesomeIcon style={{color:"gray"}} size={"xl"} icon={faEnvelope}/>
                                    </span> 
                                    <span>Continue with email</span>
                                    </button>

                                </div>
                        </div>

                        

                        

                </div>
        </div>
     );
}
 
export default Signup;