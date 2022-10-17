import { useState } from "react";

const Accessibility = () => {
    const [show_more, setMore] = useState(false);

    return ( 

        <div className="panel_shell_options--accessibility">
        <h2>Accessibility features</h2>
        <h3 style={{fontWeight:"400", color:"gray" }}>This info was provided by the Host and reviewed by Airbnb.</h3>
        <br />
        <h3>Guest entrance and parking</h3>
        <div className="parking">
                <div className="parking_cell">
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Step-free guest entrance</div>
                </div>
                <div className="parking_cell">
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Guest entrance wider than 32 inches (81 centimetres)</div>
                </div>
                <div className="parking_cell">
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Accessible parking spot</div>
                </div>
                <div className="parking_cell">
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Step-free path to the guest entrance</div>
                </div>

                <button className="show_more" 
                    onClick={() => {setMore(true)}}
                    style={{display: !show_more ? "grid" : "none" }}
                >
                    <span>Show more</span>
                </button>
        </div>

        <h3 style={{display: show_more ? "grid" : "none" }}>Bedroom</h3>
        <div className="bedroom" style={{display: show_more ? "grid" : "none" }}>
                <div className="bedroom_cell">
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Step-free bedroom access</div>
                </div>
                <div className="bedroom_cell">
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Bedroom entrance wider than 32 inches (81 centimetres)</div>
                </div>
        </div>

        <h3 style={{display: show_more ? "grid" : "none" }}>Bathroom</h3>
        <div className="bathroom" style={{display: show_more ? "grid" : "none" }}>
                <div className="bathroom_cell">
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Step-free bathroom access</div>
                </div>
                <div className="bathroom_cell">
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Bathroom entrance wider than 32 inches (81 centimetres)</div>
                </div>
                <div className="bathroom_cell">
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Shower grab bar</div>
                </div>
                <div className="bathroom_cell">
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Toilet grab bar</div>
                </div>
                <div className="bathroom_cell">
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Step-free shower</div>
                </div>
                <div className="bathroom_cell">
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Shower or bath chair</div>
                </div>
        </div>

        <h3 style={{display: show_more ? "grid" : "none" }}>Adaptive equipment</h3>
        <div className="equipment" style={{display: show_more ? "grid" : "none" }}>
                <div className="equipment_cell">
                    <div id="cbox"><input type="checkbox" /></div>
                    <div id="place-type">Ceiling or mobile hoist</div>
                </div>
        </div>
        <button className="show_less" 
                    onClick={() => {setMore(false)}}
                    style={{display: show_more ? "grid" : "none" }}
                >
                    <span>Show less</span>
        </button>
        </div>

     );
}
 
export default Accessibility;