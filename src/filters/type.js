import { useDispatch, useSelector } from "react-redux";
import { add_place_type, remove_place_type} from "../redux/placeTypeSlice";
import { useState } from "react";

const Type = () => {
    
    const dispatch = useDispatch();

    const selected_place_types = useSelector(state => state.placeTypeSlice.selected_place_types);
    const [design, setDesign] = useState([]);
    const arr =[];

    if(selected_place_types.length>0)
            {
                selected_place_types.forEach(element => {
                    // setDesign([...design, element.payload])
                    arr.push(element.payload)
                });
            }


    const filter_by_type = (e) => {
        if(e.target.checked)
        {
            dispatch(add_place_type(e.currentTarget.value))
        }
        if(!e.target.checked)
        {
            dispatch(remove_place_type(e.currentTarget.value))
        }
    }
    
    return ( 

        <div className="panel_shell_options--type">
        <h2>Type of place</h2>
        <div className="panel_shell_options--type_types">
                <div className="panel_shell_options--type_types_cell">
                    <div id="cbox"><input type="checkbox" value={"entire place"}
                    checked={arr.includes("entire place") ? true : false} 
                    onChange={(e)=>filter_by_type(e)} /></div>
                    <div id="place_double">
                        <div id="place-type">Entire place</div>
                        <div id="place-detail">A place all to yourself     </div>
                    </div>
                </div>
                <div className="panel_shell_options--type_types_cell">
                    <div id="cbox"><input type="checkbox"  value={"private room"}
                    checked={arr.includes("private room") ? true : false} 
                    onChange={(e)=>filter_by_type(e)} /></div>
                    <div id="place_double">
                        <div id="place-type">Private room</div>
                        <div id="place-detail">Your own room in a home or a hotel, plus some shared common spaces</div>
                    </div>
                </div>
                <div className="panel_shell_options--type_types_cell">
                    <div id="cbox"><input type="checkbox" value={"shared room"}
                    checked={arr.includes("shared room") ? true : false} 
                    onChange={(e)=>filter_by_type(e)} /></div>
                    <div id="place_double">
                        <div id="place-type">Shared room</div>
                        <div id="place-detail">A sleeping space and common areas that may be shared with others</div>
                    </div>
                </div>
        </div>
        
    </div>
    
     );
}
 
export default Type;