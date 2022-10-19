import "./content.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Carousel from "./carousel";


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

            <Carousel images={images}/>  
            <Carousel images={images}/>                
            
        </div>
     );
}
 
export default Content;