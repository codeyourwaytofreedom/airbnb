import "./content.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const handle_index_left = () => {
        console.log("hello")
}

const handle_index_right = () => {
        console.log("hello")
}


const Content = () => {
    return ( 
        <div className="content">
            <div className="property">
                
                <div className="property_image">
                    <img src={require("../images/property/1.webp")} alt="1" />
                    <div className="back" onClick={handle_index_left}>
                        <FontAwesomeIcon style={{color:"black"}} size={"l"} icon={faChevronLeft}/>
                    </div>
                    <div className="forth" onClick={handle_index_right}>
                        <FontAwesomeIcon style={{color:"black"}} size={"l"} icon={faChevronRight}/>
                    </div>
                </div>
                <div className="property_details">
                        <div>Kartepe, Turkey</div>
                        <div>Individual Host</div>
                        <div>30 Oct - 4 Nov</div>
                        <div>£500 Total</div>
                </div>
            </div>
            <div className="property">
                
                <div className="property_image">
                    <img src={require("../images/property/1.webp")} alt="1" />
                    <div className="back" onClick={handle_index_left}>
                        <FontAwesomeIcon style={{color:"black"}} size={"l"} icon={faChevronLeft}/>
                    </div>
                    <div className="forth" onClick={handle_index_right}>
                        <FontAwesomeIcon style={{color:"black"}} size={"l"} icon={faChevronRight}/>
                    </div>
                </div>
            </div>
            <div className="property">
                
                <div className="property_image">
                    <img src={require("../images/property/1.webp")} alt="1" />
                    <div className="back" onClick={handle_index_left}>
                        <FontAwesomeIcon style={{color:"black"}} size={"l"} icon={faChevronLeft}/>
                    </div>
                    <div className="forth" onClick={handle_index_right}>
                        <FontAwesomeIcon style={{color:"black"}} size={"l"} icon={faChevronRight}/>
                    </div>
                </div>
            </div>
            <div className="property">
                
                <div className="property_image">
                    <img src={require("../images/property/1.webp")} alt="1" />
                    <div className="back" onClick={handle_index_left}>
                        <FontAwesomeIcon style={{color:"black"}} size={"s"} icon={faChevronLeft}/>
                    </div>
                    <div className="forth" onClick={handle_index_right}>
                        <FontAwesomeIcon style={{color:"black"}} size={"s"} icon={faChevronRight}/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Content;