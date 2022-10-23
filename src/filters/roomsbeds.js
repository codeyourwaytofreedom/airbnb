import { useState } from "react";
import {test} from "../test/test";


const Roomsbeds = ({shadow, setShadow, filters_in_place,setFilters}) => {

    const filter_by_numbers = (e) => {
        if(e.target.name ==="numberofrooms")
        {
            const room_filter = {filter_name: "numberofrooms", filter_value: e.target.value}
            console.log(e.target.value)
            const neww = test.filter( property => property.numberofrooms == e.target.value)
            setShadow(neww)
        }
        if(e.target.name ==="numberofbeds")
        {

            const neww = test.filter( property => property.numberofbeds == e.target.value)
            setShadow(neww)
            if (e.target.value==="any")
            {setShadow(shadow)}
            console.log(neww)
        }
        if(e.target.name ==="numberofbathrooms")
        {
            const neww = test.filter( property => property.numberofbathrooms == e.target.value)
            setShadow(neww)
            if (e.target.value==="any")
            {setShadow(shadow)}

            console.log(neww)
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
                    defaultChecked value={"any"} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span id="any_span">Any</span>
                </label>
                <label className="radio_button">
                    <input type="radio" name="numberofrooms"
                    value={1} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>1</span>
                </label>
                <label className="radio_button">
                    <input type="radio" name="numberofrooms"
                    value={2} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>2</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofrooms"
                    value={3} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>3</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofrooms"
                    value={4} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>4</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofrooms"
                    value={5} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>5</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofrooms"
                    value={6} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>6</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofrooms"
                    value={7} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>7</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofrooms"
                    value={8} onChange={(e) => filter_by_numbers(e)}
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