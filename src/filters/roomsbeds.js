import { useState } from "react";
import {test} from "../test/test";
import { useSelector,useDispatch } from 'react-redux';
import { add_filter_by_rooms, add_filter_by_beds,add_filter_by_bathrooms } from "../redux/rooms_slider";


const Roomsbeds = ({setRoom,setBeds,setBathrooms}) => {
    
    const rooms_beds_filters = useSelector((state) => state.roomsSlice.value)
    const dispatch = useDispatch()

    const filter_by_numbers = (e) => {
        if(e.target.name ==="numberofrooms")
        {
            setRoom(e.target.value)
        }
        if(e.target.name ==="numberofbeds")
        {
            setBeds(e.target.value)
        }
        if(e.target.name ==="numberofbathrooms")
        {
            setBathrooms(e.target.value)
        } 


    }

    return ( 

        <div className="panel_shell_options--roombed">
        <h2>Rooms and beds</h2>
        <br />
        <div id="bedroom_double">
            <div id="bedroom_title"><h3>Bedrooms</h3></div>
            <div id="number">
                <label className="radio_button" id="any">
                    
                    <input type="radio" name="numberofrooms" id="any_radiobutton" 
                    defaultChecked value={"any"} onInput={(e) => filter_by_numbers(e)}
                    />
                    <span id="any_span">Any</span>
                </label>
                <label className="radio_button">
                    <input type="radio" name="numberofrooms"
                    value={1} onInput={(e) => filter_by_numbers(e)}
                    />
                    <span>1</span>
                </label>
                <label className="radio_button">
                    <input type="radio" name="numberofrooms"
                    value={2} onInput={(e) => filter_by_numbers(e)}
                    />
                    <span>2</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofrooms"
                    value={3} onInput={(e) => filter_by_numbers(e)}
                    />
                    <span>3</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofrooms"
                    value={4} onInput={(e) => filter_by_numbers(e)}
                    />
                    <span>4</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofrooms"
                    value={5} onInput={(e) => filter_by_numbers(e)}
                    />
                    <span>5</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofrooms"
                    value={6} onInput={(e) => filter_by_numbers(e)}
                    />
                    <span>6</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofrooms"
                    value={7} onInput={(e) => filter_by_numbers(e)}
                    />
                    <span>7</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofrooms"
                    value={8} onInput={(e) => filter_by_numbers(e)}
                    />
                    <span>8+</span>
                </label>
                
            </div>
        </div>
        <div id="beds_double">
            <div id="beds_title"><h3>Beds</h3></div>
            <div id="number">
            <label className="radio_button" id="any">
                    <input type="radio" name="numberofbeds" id="any_radiobutton" 
                    defaultChecked value={"any"} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span id="any_span">Any</span>
                </label>
                <label className="radio_button">
                    <input type="radio" name="numberofbeds"
                    value={1} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>1</span>
                </label>
                <label className="radio_button">
                    <input type="radio" name="numberofbeds"
                    value={2} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>2</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofbeds"
                    value={3} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>3</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofbeds"
                    value={4} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>4</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofbeds"
                    value={5} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>5</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofbeds"
                    value={6} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>6</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofbeds"
                    value={7} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>7</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofbeds"
                    value={8} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>8+</span>
                </label>
            </div>
        </div>
        <div id="bathrooms_double">
            <div id="bathrooms_title"><h3>Bathrooms</h3></div>
            <div id="number">
            <label className="radio_button" id="any">
                    
                    <input type="radio" name="numberofbathrooms" id="any_radiobutton" defaultChecked
                    value={"any"} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span id="any_span">Any</span>
                </label>
                <label className="radio_button">
                    <input type="radio" name="numberofbathrooms"
                    value={1} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>1</span>
                </label>
                <label className="radio_button">
                    <input type="radio" name="numberofbathrooms"
                    value={2} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>2</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofbathrooms"
                    value={3} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>3</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofbathrooms"
                    value={4} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>4</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofbathrooms"
                    value={5} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>5</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofbathrooms"
                    value={6} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>6</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofbathrooms"
                    value={7} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>7</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofbathrooms"
                    value={8} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>8+</span>
                </label>
            </div>
        </div>
    </div>

     );
}
 
export default Roomsbeds;