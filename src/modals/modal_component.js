import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import "./modal.css"



const Modal = ({content, setter}) => {


    const core = useRef();

    useEffect(()=>{
        const outside_core = (event) => {
                    if(!core.current.contains(event.target))
                    {
                        {setter(false)}
                    }
        }
        document.addEventListener("mousedown", outside_core)

    },[]);


    return ( 
        <div className="modal_panel">
                
                <div className="modal_panel_shell" ref={core}>
                    <div className="modal_panel_shell_title">
                        <button onClick={() => {setter(false)}}>
                            <FontAwesomeIcon style={{color:"black"}} size={"xl"} icon={faClose}/>
                        </button>
                    </div>
                    {content}

                </div>
            </div>
     );
}
 
export default Modal;