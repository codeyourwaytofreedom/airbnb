import { Link } from "react-router-dom";


const Toptier = () => {
    return ( 

        <div className="panel_shell_options--toptier">
            <h2>Top-tier stays</h2>
            <br />
            <div id="booking_triple">
                <div id="booking_double">
                    <div id="booking-type">Superhost</div>
                    <div id="booking-detail">Stay with recognised hosts</div>
                </div>
                <div id="booking-switch">
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider round"></span>
                </label>
                </div>
            </div>        
            <br />
            <div id="booking_triple">
                <div id="booking_double">
                    <div id="booking-type">Airbnb Plus</div>
                    <div id="booking-detail">A selection of places to stay verified for quality and design</div>
                    <div><Link to="/help">Learn more</Link></div>
                </div>
                <div id="booking-switch">
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider round"></span>
                </label>
                </div>
            </div> 
        </div>

     );
}
 
export default Toptier;