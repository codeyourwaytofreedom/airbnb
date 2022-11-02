import "./show_map.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";

const Show_map = ({setShowMap, show_map}) => {
    const handle_click = () => {
                if(show_map)
                {setShowMap(false)}
                else{setShowMap(true)}
    }
    return ( 
            <div className="to_center">
                <div className="show_map_shell">
                    <button onClick={handle_click}>
                        <span>Show map</span>
                        <FontAwesomeIcon icon={faMap}/>
                    </button>
                </div>
            </div>
            

     );
}
 
export default Show_map;