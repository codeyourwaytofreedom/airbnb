import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';

const Carousel = ({images, location, hosttype, dates, total}) => {

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


        <div className="property">
                
        <div className="property_image">
            <img src={images[img_index]} alt="1" />
            <div className="back" onClick={handle_index_left}
            style={{visibility: img_index===0 ? "hidden" : "visible"}}
            >
                <FontAwesomeIcon style={{color:"black"}} size={"l"} icon={faChevronLeft}/>
            </div>
            <div className="forth" onClick={handle_index_right}
            style={{visibility: img_index===9 ? "hidden" : "visible"}}
            >
                <FontAwesomeIcon style={{color:"black"}} size={"l"} icon={faChevronRight}/>
            </div>
        </div>
        <div className="property_details">
                <div className="property_details_location">
                    <div className="property_details_location_loc">{location}</div>
                    <div className="property_details_location_rating"><FontAwesomeIcon style={{color:"black"}} size={"xs"} icon={faStar}/> 4.5</div>
                </div>
                <div className="property_details_hosttype">{hosttype}</div>
                <div className="property_details_date">{dates}</div>
                <div className="property_details_total"><u><b>£{total} </b> Total</u></div>
        </div>
    </div>


     );
}
 
export default Carousel;