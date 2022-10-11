import { useEffect, useRef } from "react";
import "./filters.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const Filters = ({setShow}) => {

    const core = useRef();

    useEffect(()=>{
        const outside_core = (event) => {
                    if(!core.current.contains(event.target))
                    {setShow(false)}
        }
        document.addEventListener("mousedown", outside_core)

    },[]);

    return ( 

            <div className="filters_modal_panel">
                
                <div className="filters_modal_panel_shell" ref={core}>
                    <div className="filters_modal_panel_shell_title">
                        <button onClick={() => {setShow(false)}}>
                            <FontAwesomeIcon style={{color:"gray"}} size={"xl"} icon={faClose}/>
                        </button>
                        <div className="filters_modal_panel_shell_title_text">Filters</div>
                    </div>
                    <div className="filters_modal_panel_shell_options">
                            <div className="filters_modal_panel_shell_options--priceRange">
                                Price Range
                            </div>
                            <div className="filters_modal_panel_shell_options--type">
                                Type of place
                            </div>
                            <div className="filters_modal_panel_shell_options--roombed">
                                Rooms and beds
                            </div>
                            <div className="filters_modal_panel_shell_options--propertytype">
                                Property type
                            </div>
                            <div className="filters_modal_panel_shell_options--amenities">
                                Amenities
                            </div>
                            <div className="filters_modal_panel_shell_options--bookingoptions">
                                Booking options
                            </div>
                            <div className="filters_modal_panel_shell_options--accessibility">
                                Accessibility features
                            </div>
                            <div className="filters_modal_panel_shell_options--parking">
                                Guest entrance and parking
                            </div>
                            <div className="filters_modal_panel_shell_options--toptier">
                                Top-tier stays
                            </div>
                            <div className="filters_modal_panel_shell_options--language">
                                Host language
                            </div>
                    </div>
                    <div className="filters_modal_panel_shell_clear">
                                    Clear All ---  Show
                    </div>
                    
                </div>

            </div>

     );
}
 
export default Filters;