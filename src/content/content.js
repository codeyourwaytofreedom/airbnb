import "./content.css";
import Carousel from "./carousel";
import { all_property_details } from "../all_properties/all_properties";
import { useSelector } from "react-redux";
import { test } from "../test/test";

const Content = () => {
    const number_of_rooms = useSelector(state => state.roomsSlice.nu_room.payload);
    const number_of_beds = useSelector(state => state.roomsSlice.nu_beds.payload);
    const number_of_bathrooms = useSelector(state => state.roomsSlice.nu_bathrooms.payload);





    
    return ( 
        <div className="content">

            {/* {   
                 test.map(
                    element => 
                        <Carousel
                            images={element.images}
                            location={element.location+", Turkey"}
                            hosttype={"hhh"}
                            dates={"ddd"}
                            total={"530"}
                        />
                ) 
            } */}

            {"Rooms: "+number_of_rooms} <br></br>
            {"Beds: "+ number_of_beds}  <br></br>
            {"Bathrooms: "+number_of_bathrooms}  <br></br>
        </div>
     );
}
 
export default Content;