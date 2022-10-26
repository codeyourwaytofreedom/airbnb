import "./content.css";
import Carousel from "./carousel";
import { useSelector, useDispatch} from "react-redux";
import { test } from "../test/test";
import { useState, useEffect } from "react";
import { disapprove_filters } from "../redux/approveFiltersSlice";
import { updated_filtered_items } from "../redux/filteredItemsSlice";

const Content = () => {

    const number_of_rooms = useSelector(state => state.roomsSlice.nu_room.payload);
    const number_of_beds = useSelector(state => state.roomsSlice.nu_beds.payload);
    const number_of_bathrooms = useSelector(state => state.roomsSlice.nu_bathrooms.payload);

    const selected_place_types = useSelector(state => state.placeTypeSlice.selected_place_types);
    const selected_property_types = useSelector(state => state.propertyTypeSlice.selected_property_types);

    const [shadow, setShadow] = useState(test);
    

    const filtered_properties = [];

    const status = useSelector(state => state.approveFiltersSlice.approval_status)
    // console.log(status)

    const dispatch = useDispatch();

    useEffect(()=>{    
        
        test.forEach(property => {
            let eligible_by_room = true;
            let eligible_by_beds = true;
            let eligible_by_bathrooms = true;
            let eligible_by_place_type = true;
            let eligible_by_property_type = true;

            if(number_of_rooms && property.numberofrooms !== parseInt(number_of_rooms))
            {
                eligible_by_room=false
            }
            if(number_of_beds && property.numberofbeds !== parseInt(number_of_beds))
            {
                eligible_by_beds=false;
            }
            if(number_of_bathrooms && property.numberofbathrooms !== parseInt(number_of_bathrooms))
            {
                eligible_by_bathrooms= false;
            }


            if(selected_place_types.length>0)
            {
                const arr = [];
                selected_place_types.forEach(element => {
                    arr.push(element.payload)
                });
                if (!arr.includes(property.type))
                {eligible_by_place_type=false}
            }


            if(selected_property_types.length>0)
            {
                const arr = [];
                selected_property_types.forEach(element => {
                    arr.push(element.payload)
                });
                if (!arr.includes(property.propertytype))
                {eligible_by_property_type=false}
            }
            




            if(eligible_by_room  && eligible_by_beds && eligible_by_bathrooms 
                && eligible_by_place_type && eligible_by_property_type)
            {filtered_properties.push(property)}
            
        });
        dispatch(updated_filtered_items(filtered_properties.length))

        setShadow(filtered_properties)

        // dispatch(disapprove_filters())
        



        
        
    },[number_of_rooms,number_of_beds,number_of_bathrooms, selected_place_types, selected_property_types]);
    
    


    
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
            {"Filtered Total: " + shadow.length}  <br></br>
        </div>
     );
}
 
export default Content;