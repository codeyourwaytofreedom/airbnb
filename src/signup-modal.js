import "./signup-modal.css";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';





const Signup = ({setSM}) => {

    let modal_ref = useRef();

    useEffect( () => {
    const outclickhandler = (event) => {

                            if (!modal_ref.current.contains(event.target))
                            {
                                setSM(false);
                            }
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
                                            <select className="md-bg-inner_form_select">
                                                    <option value="A">Afganistan +93</option>
                                                    <option value="B">B</option>
                                                    <option value="C">C</option>
                                                    <option value="A">A</option>
                                                    <option value="B">B</option>
                                                    <option value="C">C</option>
                                                </select> <br></br>
                                            <span className="md-bg-inner_form_input_phone">Phone number</span>
                                            <input className="md-bg-inner_form_input" type="text" />
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
                                    <button> <span><svg  xmlns="http://www.w3.org/2000/svg" 
	 viewBox="0 0 291.319 291.319">
<g>
	<path style={{fill:"#3B5998"}} d="M145.659,0c80.45,0,145.66,65.219,145.66,145.66c0,80.45-65.21,145.659-145.66,145.659
		S0,226.109,0,145.66C0,65.219,65.21,0,145.659,0z"/>
	<path style= {{fill:"#FFFFFF"}} d="M163.394,100.277h18.772v-27.73h-22.067v0.1c-26.738,0.947-32.218,15.977-32.701,31.763h-0.055
		v13.847h-18.207v27.156h18.207v72.793h27.439v-72.793h22.477l4.342-27.156h-26.81v-8.366
		C154.791,104.556,158.341,100.277,163.394,100.277z"/>
</g>
</svg></span> <span>Continue with Facebook</span></button>
                                    <button> <span>X</span> <span>Continue with Google</span></button>
                                    <button> <span>X</span> <span>Continue with Apple</span></button>
                                    <button> <span>X</span> <span>Continue with email</span></button>

                                </div>
                        </div>

                        

                        

                </div>
        </div>
     );
}
 
export default Signup;