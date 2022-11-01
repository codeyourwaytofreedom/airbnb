import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import "./modal.css"



const Modal = ({content}) => {

    const core = useRef();
    const [show, setShow] = useState(false)

    useEffect(()=>{
        const outside_core = (event) => {
                    if(!core.current.contains(event.target))
                    {
                        // setShow(false)
                        console.log("gell")
                    }
        }
        document.addEventListener("mousedown", outside_core)

    },[]);


    return ( 
        <div className="modal_panel">
                
                <div className="modal_panel_shell" ref={core}>
                    <div className="modal_panel_shell_title">
                        <button>
                            <FontAwesomeIcon style={{color:"gray"}} size={"xl"} icon={faClose}/>
                        </button>
                    </div>
                    <div className="modal_panel_shell_options">
                        {content}
                    </div>                 
                </div>
            </div>
     );
}
 
export default Modal;