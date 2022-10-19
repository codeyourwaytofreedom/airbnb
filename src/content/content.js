import "./content.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";



const images = [
                require("../images/property/1.webp"),
                require("../images/property/2.webp"),
                require("../images/property/3.webp"),
                require("../images/property/4.webp"),
                require("../images/property/5.webp"),
                require("../images/property/6.webp"),
                require("../images/property/7.webp"),
                require("../images/property/8.webp"),
                require("../images/property/9.webp"),
                require("../images/property/10.webp")    
]


const Content = () => {

    const [img_index, setIndex] = useState(0);

    const handle_index_left = () => {
        if(img_index===0)
        {setIndex(0)}
        else{setIndex(img_index-1)}
        
    }

    const handle_index_right = () => {
        if(img_index===9)
        {setIndex(9)}
        else{setIndex(img_index+1)}
    }


    return ( 
        <div className="content">
            <div className="property">
                
                <div className="property_image">
                    <img src={images[img_index]} alt="1" />
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
                            <div className="property_details_location_rating"><FontAwesomeIcon style={{color:"black"}} size={"xs"} icon={faStar}/> New</div>
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