import { useSelector,useDispatch } from "react-redux";
import { add_property_type, remove_property_type } from "../redux/propertyTypeSlice";

const Propertytype = () => {

    const selected_property_types = useSelector(state => state.propertyTypeSlice.selected_property_types);

    const dispatch = useDispatch();

    const handle_property_type = (e) => {


    const arr = [];
    selected_property_types.forEach(element => {
        arr.push(element.payload)
    });
    if (!arr.includes(e.currentTarget.value))

    {dispatch(add_property_type(e.currentTarget.value))}

    else{
        dispatch(remove_property_type(e.currentTarget.value))
    }
            

            // if(!selected_property_types.includes(e.currentTarget.value))
            // {setSelectedPropertytypes([...selected_property_types,e.currentTarget.value])}
        
            // else{
            // setSelectedPropertytypes(selected_property_types.filter(type=> type!=e.currentTarget.value))
            // }
    }

    return ( 
        <div className="panel_shell_options--propertytype">
                                <h2>Property type</h2>
                                <br />
                                <div className="four_types">
                                    <div className="button_capsule">
                                        <button 
                                        value={"house"}
                                        onClick={(e)=>handle_property_type(e)}
                                        className="house_type_button"
                                        style={{border: selected_property_types.includes("house") ? "2px solid black" 
                                                    : "1px solid gray",
                                                backgroundColor: selected_property_types.includes("house") ? "rgb(245,245,245)" :
                                                "white" }}   
                                        >
                                            <div className="img_in_button" value={"house"}>
                                                <img src={require("../images/house.jpg")} alt="a" />
                                            </div>
                                            <div className="text_in_button">
                                                House
                                            </div>
                                        </button>
                                    </div>
                                    
                                    <div className="button_capsule">
                                        <button 
                                        value={"flat"}
                                        onClick={(e)=>handle_property_type(e)}
                                        className="flat_type_button"
                                        style={{border: selected_property_types.includes("flat") ? "2px solid black" 
                                                    : "1px solid gray",
                                                backgroundColor: selected_property_types.includes("flat") ? "rgb(245,245,245)" :
                                                "white" }}   
                                        >
                                            <div className="img_in_button">
                                                <img src={require("../images/house.jpg")} alt="a" />
                                            </div>
                                            <div className="text_in_button">
                                                Flat
                                            </div>
                                        </button>
                                    </div>

                                    <div className="button_capsule">
                                        <button 
                                        value={"guesthouse"}
                                        onClick={(e)=>handle_property_type(e)}
                                        className="ghouse_type_button"
                                        style={{border: selected_property_types.includes("guesthouse") ? "2px solid black" 
                                                    : "1px solid gray",
                                                backgroundColor: selected_property_types.includes("guesthouse") ? "rgb(245,245,245)" :
                                                "white" }}   
                                        >
                                            <div className="img_in_button">
                                                <img src={require("../images/house.jpg")} alt="a" />
                                            </div>
                                            <div className="text_in_button">
                                                Guest House
                                            </div>
                                        </button>
                                    </div>

                                    <div className="button_capsule">
                                        <button 
                                        value={"hotel"}
                                        onClick={(e)=>handle_property_type(e)} 
                                        className="hotel_type_button"
                                        style={{border: selected_property_types.includes("hotel") ? "2px solid black" 
                                                    : "1px solid gray",
                                                backgroundColor: selected_property_types.includes("hotel") ? "rgb(245,245,245)" :
                                                "white" }}   
                                        >
                                            <div className="img_in_button">
                                                <img src={require("../images/hotel.jpg")} alt="a" />
                                            </div>
                                            <div className="text_in_button">
                                                Hotel
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                
                                
        </div>

     );
}
 
export default Propertytype;