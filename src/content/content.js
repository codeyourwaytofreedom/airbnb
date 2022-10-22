import "./content.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faChevronLeft, faChevronRight, faCircle, faComputer, faDroplet, faHouse, faPencil, faRainbow, faSquare, faStar, faTelevision } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Carousel from "./carousel";
import { all_property_details } from "../all_properties/all_properties";


const Content = () => {


    return ( 
        <div className="content">

            <Carousel 
                images={all_property_details[0].images}
                location={all_property_details[0].location}
                hosttype={all_property_details[0].hosttype}
                dates={all_property_details[0].dates}
                total={all_property_details[0].total}
            
            />  
            <Carousel 
                images={all_property_details[1].images}
                location={all_property_details[1].location}
                hosttype={all_property_details[1].hosttype}
                dates={all_property_details[1].dates}
                total={all_property_details[1].total}
            
            />   
            <Carousel 
                images={all_property_details[2].images}
                location={all_property_details[2].location}
                hosttype={all_property_details[2].hosttype}
                dates={all_property_details[2].dates}
                total={all_property_details[2].total}
            
            /> 
            <Carousel 
                images={all_property_details[3].images}
                location={all_property_details[3].location}
                hosttype={all_property_details[3].hosttype}
                dates={all_property_details[3].dates}
                total={all_property_details[3].total}
            
            /> 
            
        </div>
     );
}
 
export default Content;