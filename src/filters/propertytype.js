
const Propertytype = ({ handle_house_type, 
                        handle_flat_type, 
                        handle_ghouse_type, 
                        handle_hotel_type,
                        type_flat,
                        type_ghouse,
                        type_hotel,
                        type_house
                    }) => {

    return ( 
        <div className="panel_shell_options--propertytype">
                                <h2>Property type</h2>
                                <br />
                                <div className="four_types">
                                    <div className="button_capsule">
                                        <button 
                                        onClick={handle_house_type} 
                                        className="house_type_button"
                                        style={{border: type_house ? "2px solid black" 
                                                    : "1px solid gray",
                                                backgroundColor: type_house ? "rgb(245,245,245)" :
                                                "white" }}   
                                        >
                                            <div className="img_in_button">
                                                <img src={require("../images/house.jpg")} alt="a" />
                                            </div>
                                            <div className="text_in_button">
                                                House
                                            </div>
                                        </button>
                                    </div>
                                    
                                    <div className="button_capsule">
                                        <button 
                                        onClick={handle_flat_type} 
                                        className="flat_type_button"
                                        style={{border: type_flat ? "2px solid black" 
                                                    : "1px solid gray",
                                                backgroundColor: type_flat ? "rgb(245,245,245)" :
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
                                        onClick={handle_ghouse_type} 
                                        className="ghouse_type_button"
                                        style={{border: type_ghouse ? "2px solid black" 
                                                    : "1px solid gray",
                                                backgroundColor: type_ghouse ? "rgb(245,245,245)" :
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
                                        onClick={handle_hotel_type} 
                                        className="hotel_type_button"
                                        style={{border: type_hotel ? "2px solid black" 
                                                    : "1px solid gray",
                                                backgroundColor: type_hotel ? "rgb(245,245,245)" :
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