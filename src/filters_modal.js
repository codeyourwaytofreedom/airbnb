import { useEffect, useRef, useState } from "react";
import "./filters.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const Filters = ({setShow}) => {

    const core = useRef();
    const [pricemin, setPricemin] = useState(9);
    const [pricemax, setPricemax] = useState(1000);

    useEffect(()=>{
        const outside_core = (event) => {
                    if(!core.current.contains(event.target))
                    {setShow(false)}
        }
        document.addEventListener("mousedown", outside_core)

    },[]);

    return ( 

            <div className="panel">
                
                <div className="panel_shell" ref={core}>
                    <div className="panel_shell_title">
                        <button onClick={() => {setShow(false)}}>
                            <FontAwesomeIcon style={{color:"gray"}} size={"xl"} icon={faClose}/>
                        </button>
                        <div className="panel_shell_title_text">Filters</div>
                    </div>
                    <div className="panel_shell_options">
                            <div className="panel_shell_options--priceRange">
                                <h2>Price range</h2>
                                <h3>The average nightly price is £25</h3>
                                <div className="panel_shell_options--priceRange_slider">
                                    <input type="range" min={9} max={1000} value={pricemin}
                                        onChange={(event) => {setPricemin(event.target.value)}}
                                    />
                                    <input type="range" min={9} max={1000} value={pricemax}
                                        onChange={(event) => {setPricemax(event.target.value)}}
                                    />
                                </div>
                                <div className="panel_shell_options--priceRange_inputs">
                                
                                        <div className="panel_shell_options--priceRange_inputs_min">
                                            <div className="panel_shell_options--priceRange_inputs_min_kernel">
                                                <span>£</span>
                                                <div>
                                                    <input type="text"  value={pricemin}
                                                    onChange={(event)=> setPricemin(event.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div>---</div>
                                        <div className="panel_shell_options--priceRange_inputs_max">
                                            <div className="panel_shell_options--priceRange_inputs_max_kernel">
                                                <span>£</span>
                                                <div>
                                                    <input type="text" value={pricemax}
                                                    onChange={(event)=> setPricemax(event.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                               
                                        

                                </div>
                            </div>
                            <div className="panel_shell_options--type">
                                Type of place
                            </div>
                            <div className="panel_shell_options--roombed">
                                Rooms and beds
                            </div>
                            <div className="panel_shell_options--propertytype">
                                Property type
                            </div>
                            <div className="panel_shell_options--amenities">
                                Amenities
                            </div>
                            <div className="panel_shell_options--bookingoptions">
                                Booking options
                            </div>
                            <div className="panel_shell_options--accessibility">
                                Accessibility features
                            </div>
                            <div className="panel_shell_options--parking">
                                Guest entrance and parking
                            </div>
                            <div className="panel_shell_options--toptier">
                                Top-tier stays
                            </div>
                            <div className="panel_shell_options--language">
                                Host language
                            </div>
                    </div>
                    <div className="panel_shell_clear">
                                    Clear All ---  Show
                    </div>
                    
                </div>

            </div>

     );
}
 
export default Filters;