const Roomsbeds = ({shadow, setShadow}) => {

    const filter_by_room = (e) => {
            console.log(e.target.value)
    }

    return ( 

        <div className="panel_shell_options--roombed">
        <h2>Rooms and beds</h2>
        <br />
        <div id="bedroom_double">
            <div id="bedroom_title"><h3>Bedrooms</h3></div>
            <div id="number">
                <label className="radio_button" id="any">
                    
                    <input type="radio" name="bedroom" id="any_radiobutton" 
                    defaultChecked value={"any"} onChange={(e) => filter_by_room(e)}
                    />
                    <span id="any_span">Any</span>
                </label>
                <label className="radio_button">
                    <input type="radio" name="bedroom"
                    value={1} onChange={(e) => filter_by_room(e)}
                    />
                    <span>1</span>
                </label>
                <label className="radio_button">
                    <input type="radio" name="bedroom"
                    value={2} onChange={(e) => filter_by_room(e)}
                    />
                    <span>2</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="bedroom"
                    value={3} onChange={(e) => filter_by_room(e)}
                    />
                    <span>3</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="bedroom"
                    value={4} onChange={(e) => filter_by_room(e)}
                    />
                    <span>4</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="bedroom"
                    value={5} onChange={(e) => filter_by_room(e)}
                    />
                    <span>5</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="bedroom"
                    value={6} onChange={(e) => filter_by_room(e)}
                    />
                    <span>6</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="bedroom"
                    value={7} onChange={(e) => filter_by_room(e)}
                    />
                    <span>7</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="bedroom"
                    value={8} onChange={(e) => filter_by_room(e)}
                    />
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

     );
}
 
export default Roomsbeds;