import "./content.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const images = [
    require("../images/property/property1/1.webp"),
    require("../images/property/property1/2.webp"),
    require("../images/property/property1/3.webp"),
    require("../images/property/property1/4.webp"),
    require("../images/property/property1/5.webp"),
    require("../images/property/property1/6.webp"),
    require("../images/property/property1/7.webp"),
    require("../images/property/property1/8.webp"),
    require("../images/property/property1/9.webp"),
    require("../images/property/property1/10.webp")    
]

const images1 = [
                require("../images/property/property2/1.webp"),
                require("../images/property/property2/2.webp"),
                require("../images/property/property2/3.webp"),
                require("../images/property/property2/4.webp"),
                require("../images/property/property2/5.webp"),
                require("../images/property/property2/6.webp"),
                require("../images/property/property2/7.webp"),
                require("../images/property/property2/8.webp"),
                require("../images/property/property2/9.webp"),
                require("../images/property/property2/10.webp")    
]


const Content = () => {

    const [img_index, setIndex] = useState(0);
    const [img_index1, setIndex1] = useState(0);

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

    const handle_index_left1 = () => {
        if(img_index1===0)
        {setIndex1(0)}
        else{setIndex1(img_index1-1)}
        
    }

    const handle_index_right1 = () => {
        if(img_index1===9)
        {setIndex1(9)}
        else{setIndex1(img_index1+1)}
    }


    return ( 
        <div className="content">

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
                    <img src={images1[img_index1]} alt="1" />
                    <div className="back" onClick={handle_index_left1}
                    style={{visibility: img_index1===0 ? "hidden" : "visible"}}
                    >
                        <FontAwesomeIcon style={{color:"black"}} size={"l"} icon={faChevronLeft}/>
                    </div>
                    <div className="forth" onClick={handle_index_right1}
                    style={{visibility: img_index1===9 ? "hidden" : "visible"}}
                    >
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
                            <div className="property_details_location_loc">Kartepe, Turkey</div>
                            <div className="property_details_location_rating"><FontAwesomeIcon style={{color:"black"}} size={"xs"} icon={faStar}/> New</div>
                        </div>
                        <div className="property_details_hosttype">Hosted by Can</div>
                        <div className="property_details_date">30 Oct - 4 Nov . Individual Host</div>
                        <div className="property_details_total"><u><b>£500 </b> Total</u></div>
                </div>
            </div>

            
        </div>
     );
}
 
export default Content;