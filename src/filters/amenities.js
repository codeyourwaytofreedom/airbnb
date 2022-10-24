import { useState } from "react";

const Amenities = ({selected_amenities,setSelectedAmenities}) => {
    const [show_more, setMore] = useState(false);

    const handle_amenities = (e) =>{
        if(!selected_amenities.includes(e.target.value))
        {setSelectedAmenities([...selected_amenities, e.target.value])}
        else{
            setSelectedAmenities(selected_amenities.filter(amenity=> amenity!==e.target.value))
        }
    }
    
    return ( 

        <div className="panel_shell_options--amenities">
        <h2>Amenities</h2>
        <br />
        <h3>Essentials</h3>
        <div className="essentials">
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" 
                    value={"wifi"}
                    onChange={(e)=>handle_amenities(e)} /></div>
                    <div id="place-type">Wifi</div>
                </div>
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" 
                    value={"kitchen"}
                    onChange={(e)=>handle_amenities(e)} /></div>
                    <div id="place-type">Kitchen</div>
                </div>
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" 
                    value={"washingmachine"}
                    onChange={(e)=>handle_amenities(e)} /></div>
                    <div id="place-type">Washing machine</div>
                </div>
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" 
                    value={"dryer"}
                    onChange={(e)=>handle_amenities(e)} /></div>
                    <div id="place-type">Dryer</div>
                </div>
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" 
                    value={"airconditioning"}
                    onChange={(e)=>handle_amenities(e)} /></div>
                    <div id="place-type">Air conditioning</div>
                </div>
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" 
                    value={"heating"}
                    onChange={(e)=>handle_amenities(e)} /></div>
                    <div id="place-type">Heating</div>
                </div>

                <div className="essentials_cell" style={{display: show_more ? "flex" : "none" }}>
                    <div id="cbox"><input type="checkbox" 
                    value={"dedicatedworkspace"}
                    onChange={(e)=>handle_amenities(e)}/></div>
                    <div id="place-type">Dedicated workspace</div>
                </div>

                <div className="essentials_cell" style={{display: show_more ? "flex" : "none" }}>
                    <div id="cbox"><input type="checkbox" 
                    value={"tv"}
                    onChange={(e)=>handle_amenities(e)}/></div>
                    <div id="place-type">TV</div>
                </div>

                <div className="essentials_cell" style={{display: show_more ? "flex" : "none" }}>
                    <div id="cbox"><input type="checkbox" 
                    value={"hairdryer"}
                    onChange={(e)=>handle_amenities(e)}/></div>
                    <div id="place-type">Hair dryer</div>
                </div>

                <div className="essentials_cell" style={{display: show_more ? "flex" : "none" }}>
                    <div id="cbox"><input type="checkbox" 
                    value={"iron"}
                    onChange={(e)=>handle_amenities(e)}/></div>
                    <div id="place-type">Iron</div>
                </div>

                <button className="show_more" 
                    onClick={() => {setMore(true)}}
                    style={{display: !show_more ? "grid" : "none" }}
                >
                    <span>Show more</span>
                </button>

        </div>
        <h3 style={{display: show_more ? "grid" : "none" }}>Features</h3>
        <div className="features" style={{display: show_more ? "grid" : "none" }}>
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" 
                    value={"pool"}
                    onChange={(e)=>handle_amenities(e)}/></div>
                    <div id="place-type">Pool</div>
                </div>
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" 
                    value={"hottube"}
                    onChange={(e)=>handle_amenities(e)}/></div>
                    <div id="place-type">Hot tube</div>
                </div>
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" 
                    value={"freeparking"}
                    onChange={(e)=>handle_amenities(e)}/></div>
                    <div id="place-type">Free parking on premises</div>
                </div>
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" 
                    value={"evcharger"}
                    onChange={(e)=>handle_amenities(e)}/></div>
                    <div id="place-type">EV charger</div>
                </div>
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" 
                    value={"cot"}
                    onChange={(e)=>handle_amenities(e)}/></div>
                    <div id="place-type">Cot</div>
                </div>
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" 
                    value={"gym"}
                    onChange={(e)=>handle_amenities(e)}/></div>
                    <div id="place-type">Gym</div>
                </div>

                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" 
                    value={"bbqgrill"}
                    onChange={(e)=>handle_amenities(e)}/></div>
                    <div id="place-type">BBQ grill</div>
                </div>

                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" 
                    value={"breakfast"}
                    onChange={(e)=>handle_amenities(e)}/></div>
                    <div id="place-type">Breakfast</div>
                </div>

                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" 
                    value={"fireplace"}
                    onChange={(e)=>handle_amenities(e)}/></div>
                    <div id="place-type">Indoor fireplace</div>
                </div>

                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" 
                    value={"smokingallowed"}
                    onChange={(e)=>handle_amenities(e)}/></div>
                    <div id="place-type">Smoking allowed</div>
                </div>

        </div>

        <h3 style={{display: show_more ? "grid" : "none" }}>Location</h3>
        <div className="location" style={{display: show_more ? "grid" : "none" }}>
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" 
                    value={"beachfront"}
                    onChange={(e)=>handle_amenities(e)}/></div>
                    <div id="place-type">Beachfront</div>
                </div>
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" 
                    value={"waterfront"}
                    onChange={(e)=>handle_amenities(e)}/></div>
                    <div id="place-type">Waterfront</div>
                </div>
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" 
                    value={"skiinskiout"}
                    onChange={(e)=>handle_amenities(e)}/></div>
                    <div id="place-type">Ski-in/ski-out</div>
                </div>
        </div>

        <h3 style={{display: show_more ? "grid" : "none" }}>Safety</h3>
        <div className="safety" style={{display: show_more ? "grid" : "none" }}>
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" 
                    value={"smokealarm"}
                    onChange={(e)=>handle_amenities(e)}/></div>
                    <div id="place-type">Smoke alarm</div>
                </div>
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" 
                    value={"carbonmonoxidealarm"}
                    onChange={(e)=>handle_amenities(e)}/></div>
                    <div id="place-type">Carbon monoxide alarm</div>
                </div>
                <button className="show_less" 
                    onClick={() => {setMore(false)}}
                    style={{display: show_more ? "grid" : "none" }}
                >
                    <span>Show less</span>
                </button>
        </div>


    </div>

     );
}
 
export default Amenities;