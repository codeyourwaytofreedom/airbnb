import "./content.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';

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
                        <div className="property_details_location">
                            <div className="property_details_location_loc">Kartepe, Turkey</div>
                            <div className="property_details_location_rating"><FontAwesomeIcon style={{color:"purple"}} size={"s"} icon={faStar}/> New</div>
                        </div>
                        <div className="property_details_hosttype">Hosted by Can</div>
                        <div className="property_details_date">30 Oct - 4 Nov . Individual Host</div>
                        <div className="property_details_total"><u><b>£500 </b> Total</u></div>
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