import "./content.css";
import Carousel from "./carousel";
import { all_property_details } from "../all_properties/all_properties";
import { useSelector } from "react-redux";
import { test } from "../test/test";

const Content = () => {

    // const filtered_items = useSelector(state=> state.filteredItemsSlice.filtered_properties)
    // console.log("from content component", filtered_items)

    return ( 
        <div className="content">

            {   
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
            }
            
        </div>
     );
}
 
export default Content;