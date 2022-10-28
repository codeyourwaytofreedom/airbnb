import { useDispatch, useSelector } from "react-redux";
import { add_filter_by_rooms, add_filter_by_beds, add_filter_by_bathrooms } from "../redux/rooms_slider";

const Roomsbeds = ({setTemporaryRooms,setTemporaryBeds, 
                    setTemporaryBathrooms,temporary_rooms,temporary_beds, temporary_bathrooms
                }) => {
    const dispatch = useDispatch();

    const number_of_rooms = useSelector(state => state.roomsSlice.nu_room.payload);
    const number_of_beds = useSelector(state => state.roomsSlice.nu_beds.payload);
    const number_of_bathrooms = useSelector(state => state.roomsSlice.nu_bathrooms.payload);

    // console.log("tetsing number of rooms",number_of_rooms)
    const filter_by_numbers = (e) => {
        if(e.target.name ==="numberofrooms")
        {
            // dispatch(add_filter_by_rooms(e.target.value))
            setTemporaryRooms(e.target.value)
            // console.log(e.target.value)

        }
        if(e.target.name ==="numberofbeds")
        {
            // dispatch(add_filter_by_beds(e.target.value))
            // console.log(e.target.value)
            setTemporaryBeds(e.target.value)
            
        }
        if(e.target.name ==="numberofbathrooms")
        {
            // dispatch(add_filter_by_bathrooms(e.target.value))
            setTemporaryBathrooms(e.target.value)
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
                    defaultChecked= {!number_of_rooms ? true : number_of_rooms === "0" ? true : false}
                    value={0} onInput={(e) => filter_by_numbers(e)}
                    />
                    <span id="any_span">Any</span>
                </label>
                <label className="radio_button">
                    <input type="radio" name="numberofrooms"
                    defaultChecked= {number_of_rooms && number_of_rooms ==="1" ? true : false}
                    value={1} onInput={(e) => filter_by_numbers(e)}
                    />
                    <span>1</span>
                </label>
                <label className="radio_button">
                    <input type="radio" name="numberofrooms"
                    defaultChecked= {number_of_rooms && number_of_rooms ==="2" ? true : false}
                    value={2} onInput={(e) => filter_by_numbers(e)}
                    />
                    <span>2</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofrooms"
                    defaultChecked= {number_of_rooms && number_of_rooms ==="3" ? true : false}
                    value={3} onInput={(e) => filter_by_numbers(e)}
                    />
                    <span>3</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofrooms"
                    defaultChecked= {number_of_rooms && number_of_rooms ==="4" ? true : false}
                    value={4} onInput={(e) => filter_by_numbers(e)}
                    />
                    <span>4</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofrooms"
                    defaultChecked= {number_of_rooms && number_of_rooms ==="5" ? true : false}
                    value={5} onInput={(e) => filter_by_numbers(e)}
                    />
                    <span>5</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofrooms"
                    defaultChecked= {number_of_rooms && number_of_rooms ==="6" ? true : false}
                    value={6} onInput={(e) => filter_by_numbers(e)}
                    />
                    <span>6</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofrooms"
                    defaultChecked= {number_of_rooms && number_of_rooms ==="7" ? true : false}
                    value={7} onInput={(e) => filter_by_numbers(e)}
                    />
                    <span>7</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofrooms"
                    defaultChecked= {number_of_rooms && number_of_rooms ==="8" ? true : false}
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
                    defaultChecked= {!number_of_beds  ? true : number_of_beds === "0" ? true : false}
                     value={0} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span id="any_span">Any</span>
                </label>
                <label className="radio_button">
                    <input type="radio" name="numberofbeds"
                    defaultChecked= {number_of_beds && number_of_beds ==="1" ? true : false}
                    value={1} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>1</span>
                </label>
                <label className="radio_button">
                    <input type="radio" name="numberofbeds"
                    defaultChecked= {number_of_beds && number_of_beds ==="2" ? true : false}
                    value={2} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>2</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofbeds"
                    defaultChecked= {number_of_beds && number_of_beds ==="3" ? true : false}
                    value={3} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>3</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofbeds"
                    defaultChecked= {number_of_beds && number_of_beds ==="4" ? true : false}
                    value={4} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>4</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofbeds"
                    defaultChecked= {number_of_beds && number_of_beds ==="5" ? true : false}
                    value={5} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>5</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofbeds"
                    defaultChecked= {number_of_beds && number_of_beds ==="6" ? true : false}
                    value={6} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>6</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofbeds"
                    defaultChecked= {number_of_beds && number_of_beds ==="7" ? true : false}
                    value={7} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>7</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofbeds"
                    defaultChecked= {number_of_beds && number_of_beds ==="8" ? true : false}
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
                    
                    <input type="radio" name="numberofbathrooms" id="any_radiobutton" 
                    defaultChecked={!number_of_bathrooms ? true : number_of_bathrooms === "0" ? true : false}
                    value={0} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span id="any_span">Any</span>
                </label>
                <label className="radio_button">
                    <input type="radio" name="numberofbathrooms"
                    defaultChecked= {number_of_bathrooms && number_of_bathrooms ==="1" ? true : false}
                    value={1} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>1</span>
                </label>
                <label className="radio_button">
                    <input type="radio" name="numberofbathrooms"
                    defaultChecked= {number_of_bathrooms && number_of_bathrooms ==="2" ? true : false}
                    value={2} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>2</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofbathrooms"
                    defaultChecked= {number_of_bathrooms && number_of_bathrooms ==="3" ? true : false}
                    value={3} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>3</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofbathrooms"
                    defaultChecked= {number_of_bathrooms && number_of_bathrooms ==="4" ? true : false}
                    value={4} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>4</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofbathrooms"
                    defaultChecked= {number_of_bathrooms && number_of_bathrooms ==="5" ? true : false}
                    value={5} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>5</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofbathrooms"
                    defaultChecked= {number_of_bathrooms && number_of_bathrooms ==="6" ? true : false}
                    value={6} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>6</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofbathrooms"
                    defaultChecked= {number_of_bathrooms && number_of_bathrooms ==="7" ? true : false}
                    value={7} onChange={(e) => filter_by_numbers(e)}
                    />
                    <span>7</span>
                </label>

                <label className="radio_button">
                    <input type="radio" name="numberofbathrooms"
                    defaultChecked= {number_of_bathrooms && number_of_bathrooms ==="8" ? true : false}
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