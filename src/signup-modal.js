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
                        <div className="md-bg-inner-title">
                            <button onClick={()=> setSM(false)}>X</button>
                            <h3>Log in or Sign up!</h3>
                        </div>

                        <div className="md-bg-inner-welc"><h3>Welcome to Airbnb</h3></div>

                        <div className="md-bg-inner-form">
                            <form action="">
                                <select>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                </select> <br></br>
                                <input type="text" />
                                <button type="submit">Continue</button>
                            </form>
                        </div>
                        

                        <div className="md-bg-inner-cont">
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