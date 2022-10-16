import { useState } from "react";

const Amenities = () => {
    const [show_more, setMore] = useState(false);
    
    return ( 

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

                <div className="essentials_cell" style={{display: show_more ? "flex" : "none" }}>
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Dedicated workspace</div>
                </div>

                <div className="essentials_cell" style={{display: show_more ? "flex" : "none" }}>
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">TV</div>
                </div>

                <div className="essentials_cell" style={{display: show_more ? "flex" : "none" }}>
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Hair dryer</div>
                </div>

                <div className="essentials_cell" style={{display: show_more ? "flex" : "none" }}>
                    <div id="cbox"><input type="checkbox" /></div>
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
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Pool</div>
                </div>
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Hot tube</div>
                </div>
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Free parking on premises</div>
                </div>
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">EV charger</div>
                </div>
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Cot</div>
                </div>
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Gym</div>
                </div>

                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">BBQ grill</div>
                </div>

                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Breakfast</div>
                </div>

                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Indoor fireplace</div>
                </div>

                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Smoking allowed</div>
                </div>

        </div>

        <h3 style={{display: show_more ? "grid" : "none" }}>Location</h3>
        <div className="location" style={{display: show_more ? "grid" : "none" }}>
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Beachfront</div>
                </div>
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Waterfront</div>
                </div>
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Ski-in/ski-out</div>
                </div>
        </div>

        <h3 style={{display: show_more ? "grid" : "none" }}>Safety</h3>
        <div className="safety" style={{display: show_more ? "grid" : "none" }}>
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Smoke alarm</div>
                </div>
                <div className="essentials_cell">
                    <div id="cbox"><input type="checkbox" /></div>
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