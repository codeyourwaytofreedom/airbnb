import { useSelector, useDispatch } from "react-redux";
import { set_entire,set_priv,set_shared } from "../redux/placeTypeSlice";

const Type = () => {

    const dispatch = useDispatch();

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
                if(element && element!=="x")
                {
                arr2.push(element)
            }
            });
    console.log("options to remember",arr2)


    const filter_by_type = (e) => {
        if(e.target.checked)
        {
            if(e.target.value === "entire place")
            {dispatch(set_entire(e.target.value))
            }

            if(e.target.value === "private room")
            {dispatch(set_priv(e.target.value))
            }

            if(e.target.value === "shared room")
            {dispatch(set_shared(e.target.value))
            }
            
            // setPlaceTypeFilters([...place_type_filters, e.target.value])
            // dispatch(add_place_type(e.target.value))
        }

        if(!e.target.checked)
        {
            // setPlaceTypeFilters(place_type_filters.filter(ty => ty !==e.target.value))
            // dispatch(remove_place_type(e.target.value))
            if(e.target.value === "entire place")
            {dispatch(set_entire("x"))
            }

            if(e.target.value === "private room")
            {dispatch(set_priv("x"))
            }

            if(e.target.value === "shared room")
            {dispatch(set_shared("x"))
            }
        }
    }
    
    return ( 

        <div className="panel_shell_options--type">
        <h2>Type of place</h2>
        <div className="panel_shell_options--type_types">
                <div className="panel_shell_options--type_types_cell">
                    <div id="cbox"><input type="checkbox" id="a" value={"entire place"}
                    defaultChecked={arr2.includes('entire place') ? true : false} 
                    onChange={(e)=>filter_by_type(e)} /></div>
                    <div id="place_double">
                        <div id="place-type">Entire place</div>
                        <div id="place-detail">A place all to yourself</div>
                    </div>
                </div>
                <div className="panel_shell_options--type_types_cell">
                    <div id="cbox"><input type="checkbox" id="b"   value={"private room"}
                    defaultChecked={arr2.includes('private room') ? true : false} 
                    onChange={(e)=>filter_by_type(e)} /></div>
                    <div id="place_double">
                        <div id="place-type">Private room</div>
                        <div id="place-detail">Your own room in a home or a hotel, plus some shared common spaces</div>
                    </div>
                </div>
                <div className="panel_shell_options--type_types_cell">
                    <div id="cbox"><input type="checkbox" id="c"  value={"shared room"}
                    defaultChecked={arr2.includes('shared room') ? true : false} 
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