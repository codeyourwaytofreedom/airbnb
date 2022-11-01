import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import "./modal.css"



const Modal = ({content, show, setShow}) => {


    const core = useRef();

    useEffect(()=>{
        const outside_core = (event) => {
                    if(!core.current.contains(event.target))
                    {
                        setShow(false)
                    }
        }
        document.addEventListener("mousedown", outside_core)

    },[]);


    return ( 
        <div className="modal_panel" style={{ display: show ? "grid" : "none" }}>
                
                <div className="modal_panel_shell" ref={core}>
                    <div className="modal_panel_shell_title">
                        <button onClick={() => setShow(false)}>
                            <FontAwesomeIcon style={{color:"gray"}} size={"xl"} icon={faClose}/>
                        </button>
                    </div>
                    {content}

                    {/* <div className="modal_panel_shell_options">
                        {content}
                    </div>                  */}
                </div>
            </div>
     );
}
 
export default Modal;