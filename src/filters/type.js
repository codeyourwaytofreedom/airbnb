import {test} from "../test/test";

const options = [];
const Type = ({setSelectedtypes, selected_property_types}) => {

    const filter_by_type = (e) => {
        if(e.target.checked)
        {
            if(!selected_property_types.includes(e.target.value))
            {setSelectedtypes([...selected_property_types, e.target.value])}
        }
        if(!e.target.checked)
        {
            setSelectedtypes(selected_property_types.filter(type => type!= e.target.value))
        }

    }
    
    return ( 

        <div className="panel_shell_options--type">
        <h2>Type of place</h2>
        <div className="panel_shell_options--type_types">
                <div className="panel_shell_options--type_types_cell">
                    <div id="cbox"><input type="checkbox" value={"entire place"} 
                    onChange={(e)=>filter_by_type(e)} /></div>
                    <div id="place_double">
                        <div id="place-type">Entire place</div>
                        <div id="place-detail">A place all to yourself     </div>
                    </div>
                </div>
                <div className="panel_shell_options--type_types_cell">
                    <div id="cbox"><input type="checkbox"  value={"private room"}
                    onChange={(e)=>filter_by_type(e)} /></div>
                    <div id="place_double">
                        <div id="place-type">Private room</div>
                        <div id="place-detail">Your own room in a home or a hotel, plus some shared common spaces</div>
                    </div>
                </div>
                <div className="panel_shell_options--type_types_cell">
                    <div id="cbox"><input type="checkbox" value={"shared room"}
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