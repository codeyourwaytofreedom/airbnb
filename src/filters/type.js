import { useDispatch, useSelector } from "react-redux";
import { add_place_type, remove_place_type, set_entire, set_private, set_shared} from "../redux/placeTypeSlice";
import { useState } from "react";

const Type = () => {
    
    const dispatch = useDispatch();
    const [place_types, setTypes] = useState([]);


    const selected_place_types = useSelector(state => state.placeTypeSlice.selected_place_types);
    const entire = useSelector(state => state.placeTypeSlice.type_entire);
    const pprivate = useSelector(state => state.placeTypeSlice.type_private);
    const shared = useSelector(state => state.placeTypeSlice.type_shared);


    const filter_by_type = (e) => {
        if(e.target.checked)
        {
            if(e.target.value === "entire place")
            {dispatch(set_entire(true))}
            if(e.target.value === "shared room")
            {dispatch(set_shared(true))}
            if(e.target.value === "private room")
            {dispatch(set_private(true))}

            dispatch(add_place_type(e.target.value))
            setTypes([...place_types, e.target.value])
        }

        if(!e.target.checked)
        {
            dispatch(remove_place_type(e.target.value))
            setTypes(place_types.filter(ty => ty !==e.target.value))
            if(e.target.value === "entire place")
            {dispatch(set_entire(false))}
            if(e.target.value === "shared room")
            {dispatch(set_shared(false))}
            if(e.target.value === "private room")
            {dispatch(set_private(false))}
        }
    }

    console.log(selected_place_types)
    console.log(place_types)
    console.log(entire)
    
    return ( 

        <div className="panel_shell_options--type">
        <h2>Type of place</h2>
        <div className="panel_shell_options--type_types">
                <div className="panel_shell_options--type_types_cell">
                    <div id="cbox"><input type="checkbox" id="a" value={"entire place"} 
                    defaultChecked={entire.payload ? true : false}
                    onChange={(e)=>filter_by_type(e)} /></div>
                    <div id="place_double">
                        <div id="place-type">Entire place</div>
                        <div id="place-detail">A place all to yourself</div>
                    </div>
                </div>
                <div className="panel_shell_options--type_types_cell">
                    <div id="cbox"><input type="checkbox" id="b"   value={"private room"}
                    defaultChecked={pprivate.payload ? true : false}
                    onChange={(e)=>filter_by_type(e)} /></div>
                    <div id="place_double">
                        <div id="place-type">Private room</div>
                        <div id="place-detail">Your own room in a home or a hotel, plus some shared common spaces</div>
                    </div>
                </div>
                <div className="panel_shell_options--type_types_cell">
                    <div id="cbox"><input type="checkbox" id="c"  value={"shared room"}
                    defaultChecked={shared.payload ? true : false}
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