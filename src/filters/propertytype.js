import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { add_property_type, remove_property_type } from "../redux/propertyTypeSlice";

const Propertytype = ({temporary_property_types,setTemporaryPropertyTypes}) => {

    const selected_property_types = useSelector(state => state.propertyTypeSlice.selected_property_types);
    
    
    const dispatch = useDispatch();
    let remembered = []


    

    useEffect(()=>{
        if(selected_property_types.payload)
            {
                remembered=selected_property_types.payload
                console.log("tersten yüklendi", remembered)
                setTemporaryPropertyTypes(selected_property_types.payload)
            
            }
    },[]);

    const handle_property_type = (e)  => {

            if(!temporary_property_types.includes(e.currentTarget.value))
            {setTemporaryPropertyTypes([...temporary_property_types, e.currentTarget.value])}
            else{
                setTemporaryPropertyTypes(temporary_property_types.filter 
                    (element => element!== e.currentTarget.value))
            }

            
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
                                        style={{border: temporary_property_types.includes("house") ? "2px solid black" 
                                                    : "1px solid gray",
                                                backgroundColor: temporary_property_types.includes("house") ? "rgb(245,245,245)" :
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
                                        style={{border: temporary_property_types.includes("flat") ? "2px solid black" 
                                                    : "1px solid gray",
                                                backgroundColor: temporary_property_types.includes("flat") ? "rgb(245,245,245)" :
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
                                        style={{border: temporary_property_types.includes("guesthouse") ? "2px solid black" 
                                                    : "1px solid gray",
                                                backgroundColor: temporary_property_types.includes("guesthouse") ? "rgb(245,245,245)" :
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
                                        style={{border: temporary_property_types.includes("hotel") ? "2px solid black" 
                                                    : "1px solid gray",
                                                backgroundColor: temporary_property_types.includes("hotel") ? "rgb(245,245,245)" :
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