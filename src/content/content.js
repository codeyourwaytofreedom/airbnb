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

    const selected_property_types = useSelector(state => state.propertyTypeSlice.selected_property_types);

    const [shadow, setShadow] = useState(test);
    

    const filtered_properties = [];

    const entire = useSelector(state => state.placeTypeSlice.entire)
    const priv = useSelector(state => state.placeTypeSlice.priv)
    const shared = useSelector(state => state.placeTypeSlice.shared)
    
    const arr = []

    if (entire.payload)
    {arr.push(entire.payload)}
    if (priv.payload)
    {arr.push(priv.payload)}
    if (shared.payload)
    {arr.push(shared.payload)}

    const arr2 = [];
            arr.forEach(element => {
                if(element && element!=="x" && element!=="y")
                {
                    // console.log("item: ", element)
                arr2.push(element)
            }
            });



    const dispatch = useDispatch();

    // console.log(selected_property_types.payload)


    useEffect(()=>{    
        
        test.forEach(property => {
            let eligible_by_room = true;
            let eligible_by_beds = true;
            let eligible_by_bathrooms = true;
            let eligible_by_property_type = true;
            let eligible_by_place_type = true;

            if(number_of_rooms && parseInt(number_of_rooms)!== 0 && property.numberofrooms !== parseInt(number_of_rooms))
            {
                eligible_by_room=false
            }
            if(number_of_beds && parseInt(number_of_beds)!== 0 && property.numberofbeds !== parseInt(number_of_beds))
            {
                eligible_by_beds=false;
            }
            if(number_of_bathrooms && parseInt(number_of_bathrooms)!== 0 && property.numberofbathrooms !== parseInt(number_of_bathrooms))
            {
                eligible_by_bathrooms= false;
            }

            

            if(arr2.length>0 && !arr2.includes(property.type))
            {
               eligible_by_place_type = false;
                
            };




            if(selected_property_types.payload && selected_property_types.payload.length>0 && 
                !selected_property_types.payload.includes(property.propertytype))
            {
                eligible_by_property_type=false
            }
            




            if(eligible_by_room  && eligible_by_beds && eligible_by_bathrooms 
                && eligible_by_place_type && eligible_by_property_type)
            {filtered_properties.push(property)}
            
        });
        dispatch(updated_filtered_items(filtered_properties))

        setShadow(filtered_properties)




        
        
    },[number_of_rooms,number_of_beds,number_of_bathrooms,entire,priv,shared, selected_property_types]);
    
    


    
    return ( 
        <div className="content">
            <div>
            {"Rooms: "+number_of_rooms} <br></br>
            {"Beds: "+ number_of_beds}  <br></br>
            {"Bathrooms: "+number_of_bathrooms}  <br></br>
            {"Entire: "+entire.payload}  <br></br>
            {"Private: "+priv.payload}  <br></br>
            {"Shared: "+shared.payload}  <br></br>
            {"Filtered Total: " + shadow.length}  <br></br>
            </div>

            {   
                shadow.slice(0,10).map(
                    element => 
                        <Carousel
                            images={element.images}
                            location={element.location+", Turkey"}
                            hosttype={element.type}
                            dates={element.numberofrooms}
                            total={element.numberofbeds}
                        />
                ) 
            }

            
        </div>
     );
}
 
export default Content;