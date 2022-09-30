import "./signup-modal.css";
import { useEffect, useRef } from "react";





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
                            <button onClick={()=> setSM(false)}>X</button>
                            <h3>Log in or Sign up!</h3>
                        </div>
                        <div className="md-bg-inner_welc"><h3>Welcome to Airbnb</h3></div>

                        <div className="md-bg-inner_form">
                            <form action="">
                                <select className="md-bg-inner_form_select">
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                </select> <br></br>
                                
                                <input className="md-bg-inner_form_input" type="text" />
                                <div>hhhhhhhhhhhhhhhhhhhhhhh</div>
                                <button type="submit">Continue</button>
                            </form>
                        </div>
                        

                        <div className="md-bg-inner_cont">
                            <button>Continue with XXXXXXXXXX</button>
                            <button>Continue with XXXXXXXXXX</button>
                            <button>Continue with XXXXXXXXXX</button>
                            <button>Continue with XXXXXXXXXX</button>
                        </div>

                </div>
        </div>
     );
}
 
export default Signup;