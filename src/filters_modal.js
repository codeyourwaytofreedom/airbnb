import { useEffect, useRef, useState } from "react";
import "./filters.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import {repetition_array, min, max, av} from "./test";


const Filters = ({setShow}) => {

    const core = useRef();
    const[type_house, addTypeHouse] = useState(false);
    const[type_flat, addTypeFlat] = useState(false);
    const[type_ghouse, addTypeGhouse] = useState(false);
    const[type_hotel, addTypeHotel] = useState(false);



    
    const [pricemin, setPricemin] = useState(min);
    const [pricemax, setPricemax] = useState(max);
    let gap = 10;


    const handle_price_min = (event) => {
        setPricemin(event.target.value)
    }

    const handle_price_max = (event) => {
        setPricemax(event.target.value)
    }

    const handle_input_min = (event) => {
        if(pricemax- event.target.value < gap) 
        {event.target.value=pricemin}
    }

    const handle_input_max = (event) => {
        console.log(event.target.value)
        if(event.target.value-pricemin < gap)
        {
            console.log("must stop here");
            console.log(pricemax)
            event.target.value = pricemax;
        }

    }

    const handle_house_type = () => {
        if(type_house===false)
        {addTypeHouse(true)}
        else{addTypeHouse(false)}
    }

    const handle_flat_type = () => {
        if(type_flat===false)
        {addTypeFlat(true)}
        else{addTypeFlat(false)}
    }

    const handle_ghouse_type = () => {
        if(type_ghouse===false)
        {addTypeGhouse(true)}
        else{addTypeGhouse(false)}
    }

    const handle_hotel_type = () => {
        if(type_hotel===false)
        {addTypeHotel(true)}
        else{addTypeHotel(false)}
    }

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
                                <h3>The average nightly price is £{av}</h3>
                                <div className="panel_shell_options--priceRange_chart">
                                {
                                    repetition_array.map((o) => (
                                             <div style={{ 
                                                        height:o}}
                                             >
                                                
                                            </div>
                                    ))
                                }
                                </div>
                                <div className="panel_shell_options--priceRange_slider">
                                    <input type="range" min={min} max={max} value={pricemin} 
                                        onChange={(event)=>handle_price_min(event)}
                                        onInput={(event)=>handle_input_min(event)}
                                    />
                                    <input type="range" min={min} max={max} value={pricemax}
                                        onChange={(event)=>handle_price_max(event)}
                                        onInput={(event)=>handle_input_max(event)}
                                    />
                                </div>
                                <div className="panel_shell_options--priceRange_inputs">
                                
                                        <div className="panel_shell_options--priceRange_inputs_min">
                                            <div className="panel_shell_options--priceRange_inputs_min_kernel">
                                                <span>£</span>
                                                <span className="max">min price</span>
                                                <div>
                                                    <input type="text"  value={pricemin}
                                                    onChange={(event)=>handle_price_min(event)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel_shell_options--priceRange_inputs_dash">−</div>
                                        <div className="panel_shell_options--priceRange_inputs_max">
                                            <div className="panel_shell_options--priceRange_inputs_max_kernel">
                                                <span>£</span>
                                                <span className="max">max price</span>
                                                <div>
                                                    <input type="text" value={pricemax}
                                                    onChange={(event)=>handle_price_max(event)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                               
                                        

                                </div>
                            </div>
                            <div className="panel_shell_options--type">
                                <h2>Type of place</h2>
                                <div className="panel_shell_options--type_types">
                                        <div className="panel_shell_options--type_types_cell">
                                            <div id="cbox"><input type="checkbox" /></div>
                                            <div id="place_double">
                                                <div id="place-type">Entire place</div>
                                                <div id="place-detail">A place all to yourself     </div>
                                            </div>
                                        </div>
                                        <div className="panel_shell_options--type_types_cell">
                                            <div id="cbox"><input type="checkbox" /></div>
                                            <div id="place_double">
                                                <div id="place-type">Private room</div>
                                                <div id="place-detail">Your own room in a home or a hotel, plus some shared common spaces</div>
                                            </div>
                                        </div>
                                        <div className="panel_shell_options--type_types_cell">
                                            <div id="cbox"><input type="checkbox" /></div>
                                            <div id="place_double">
                                                <div id="place-type">Shared room</div>
                                                <div id="place-detail">A sleeping space and common areas that may be shared with others</div>
                                            </div>
                                        </div>
                                </div>
                                
                            </div>
                            <div className="panel_shell_options--roombed">
                            <h2>Rooms and beds</h2>
                            <br />
                            <div id="bedroom_double">
                                <div id="bedroom_title"><h3>Bedrooms</h3></div>
                                <div id="number">
                                    <label className="radio_button" id="any">
                                        
                                        <input type="radio" name="bedroom" id="any_radiobutton" defaultChecked/>
                                        <span id="any_span">Any</span>
                                    </label>
                                    <label className="radio_button">
                                        <input type="radio" name="bedroom"/>
                                        <span>1</span>
                                    </label>
                                    <label className="radio_button">
                                        <input type="radio" name="bedroom"/>
                                        <span>2</span>
                                    </label>

                                    <label className="radio_button">
                                        <input type="radio" name="bedroom"/>
                                        <span>3</span>
                                    </label>

                                    <label className="radio_button">
                                        <input type="radio" name="bedroom"/>
                                        <span>4</span>
                                    </label>

                                    <label className="radio_button">
                                        <input type="radio" name="bedroom"/>
                                        <span>5</span>
                                    </label>

                                    <label className="radio_button">
                                        <input type="radio" name="bedroom"/>
                                        <span>6</span>
                                    </label>

                                    <label className="radio_button">
                                        <input type="radio" name="bedroom"/>
                                        <span>7</span>
                                    </label>

                                    <label className="radio_button">
                                        <input type="radio" name="bedroom"/>
                                        <span>8+</span>
                                    </label>
                                    
                                </div>
                            </div>
                            <div id="beds_double">
                                <div id="beds_title"><h3>Beds</h3></div>
                                <div id="number">
                                <label className="radio_button" id="any">
                                        <input type="radio" name="beds" id="any_radiobutton" defaultChecked/>
                                        <span id="any_span">Any</span>
                                    </label>
                                    <label className="radio_button">
                                        <input type="radio" name="beds"/>
                                        <span>1</span>
                                    </label>
                                    <label className="radio_button">
                                        <input type="radio" name="beds"/>
                                        <span>2</span>
                                    </label>

                                    <label className="radio_button">
                                        <input type="radio" name="beds"/>
                                        <span>3</span>
                                    </label>

                                    <label className="radio_button">
                                        <input type="radio" name="beds"/>
                                        <span>4</span>
                                    </label>

                                    <label className="radio_button">
                                        <input type="radio" name="beds"/>
                                        <span>5</span>
                                    </label>

                                    <label className="radio_button">
                                        <input type="radio" name="beds"/>
                                        <span>6</span>
                                    </label>

                                    <label className="radio_button">
                                        <input type="radio" name="beds"/>
                                        <span>7</span>
                                    </label>

                                    <label className="radio_button">
                                        <input type="radio" name="beds"/>
                                        <span>8+</span>
                                    </label>
                                </div>
                            </div>
                            <div id="bathrooms_double">
                                <div id="bathrooms_title"><h3>Bathrooms</h3></div>
                                <div id="number">
                                <label className="radio_button" id="any">
                                        
                                        <input type="radio" name="bathrooms" id="any_radiobutton" defaultChecked/>
                                        <span id="any_span">Any</span>
                                    </label>
                                    <label className="radio_button">
                                        <input type="radio" name="bathrooms"/>
                                        <span>1</span>
                                    </label>
                                    <label className="radio_button">
                                        <input type="radio" name="bathrooms"/>
                                        <span>2</span>
                                    </label>

                                    <label className="radio_button">
                                        <input type="radio" name="bathrooms"/>
                                        <span>3</span>
                                    </label>

                                    <label className="radio_button">
                                        <input type="radio" name="bathrooms"/>
                                        <span>4</span>
                                    </label>

                                    <label className="radio_button">
                                        <input type="radio" name="bathrooms"/>
                                        <span>5</span>
                                    </label>

                                    <label className="radio_button">
                                        <input type="radio" name="bathrooms"/>
                                        <span>6</span>
                                    </label>

                                    <label className="radio_button">
                                        <input type="radio" name="bathrooms"/>
                                        <span>7</span>
                                    </label>

                                    <label className="radio_button">
                                        <input type="radio" name="bathrooms"/>
                                        <span>8+</span>
                                    </label>
                                </div>
                            </div>
                                
                            </div>
                            <div className="panel_shell_options--propertytype">
                                <h2>Property type</h2>
                                <br />
                                <div className="four_types">
                                    <div className="button_capsule">
                                        <button 
                                        onClick={handle_house_type} 
                                        className="house_type_button"
                                        style={{border: type_house ? "2px solid black" 
                                                    : "1px solid gray",
                                                backgroundColor: type_house ? "rgb(245,245,245)" :
                                                "white" }}   
                                        >
                                            <div className="img_in_button">
                                                <img src={require("./images/house.jpg")} alt="a" />
                                            </div>
                                            <div className="text_in_button">
                                                House
                                            </div>
                                        </button>
                                    </div>
                                    
                                    <div className="button_capsule">
                                        <button 
                                        onClick={handle_flat_type} 
                                        className="flat_type_button"
                                        style={{border: type_flat ? "2px solid black" 
                                                    : "1px solid gray",
                                                backgroundColor: type_flat ? "rgb(245,245,245)" :
                                                "white" }}   
                                        >
                                            <div className="img_in_button">
                                                <img src={require("./images/house.jpg")} alt="a" />
                                            </div>
                                            <div className="text_in_button">
                                                Flat
                                            </div>
                                        </button>
                                    </div>

                                    <div className="button_capsule">
                                        <button 
                                        onClick={handle_ghouse_type} 
                                        className="ghouse_type_button"
                                        style={{border: type_ghouse ? "2px solid black" 
                                                    : "1px solid gray",
                                                backgroundColor: type_ghouse ? "rgb(245,245,245)" :
                                                "white" }}   
                                        >
                                            <div className="img_in_button">
                                                <img src={require("./images/house.jpg")} alt="a" />
                                            </div>
                                            <div className="text_in_button">
                                                Guest House
                                            </div>
                                        </button>
                                    </div>

                                    <div className="button_capsule">
                                        <button 
                                        onClick={handle_hotel_type} 
                                        className="hotel_type_button"
                                        style={{border: type_hotel ? "2px solid black" 
                                                    : "1px solid gray",
                                                backgroundColor: type_hotel ? "rgb(245,245,245)" :
                                                "white" }}   
                                        >
                                            <div className="img_in_button">
                                                <img src={require("./images/house.jpg")} alt="a" />
                                            </div>
                                            <div className="text_in_button">
                                                Hotel
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                
                                
                            </div>
                            <div className="panel_shell_options--amenities">
                                <h2>Amenities</h2>
                                <br />
                                <h3>Essentials</h3>
                                <div className="essentials">
                                        <div className="essentials_cell">
                                            <div id="cbox"><input type="checkbox" /></div>
                                            <div id="place-type">Wifi</div>
                                        </div>
                                        <div className="essentials_cell">
                                            <div id="cbox"><input type="checkbox" /></div>
                                            <div id="place-type">Kitchen</div>
                                        </div>
                                        <div className="essentials_cell">
                                            <div id="cbox"><input type="checkbox" /></div>
                                            <div id="place-type">Washing machine</div>
                                        </div>
                                        <div className="essentials_cell">
                                            <div id="cbox"><input type="checkbox" /></div>
                                            <div id="place-type">Dryer</div>
                                        </div>
                                        <div className="essentials_cell">
                                            <div id="cbox"><input type="checkbox" /></div>
                                            <div id="place-type">Air conditioning</div>
                                        </div>
                                        <div className="essentials_cell">
                                            <div id="cbox"><input type="checkbox" /></div>
                                            <div id="place-type">Heating</div>
                                        </div>
                                </div>
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
                        <div> <b><u>Clear All</u> </b>  </div>
                                 
                    </div>
                    
                </div>
            
            </div>

     );
}
 
export default Filters;