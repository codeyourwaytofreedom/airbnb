import "./bottom_banner.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faChevronUp, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Modal from "../modals/modal_component";
import { useState } from "react";
import React from "react";
import  Lan  from "./language_modal";
import Currency from "./currency_modal";


const Bottom_banner = () => {    

    const [showLanguage, setShowLanguage] = useState(false)
    const [showCurrency, setShowCurrency] = useState(false)

    
    return ( 
        <>
        {showLanguage ?
        <Modal content={<Lan/>} setter={setShowLanguage} />
        : null}

        {showCurrency ?
        <Modal content={<Currency/>} setter={setShowCurrency} />
        : null}




        
        <div className="bottom_banner">
        
            <div className="bottom_banner_left">
                <div className="bottom_banner_left_cell">© 2022 Airbnb, Inc.</div>
                <span> . </span>
                <div className="bottom_banner_left_cell"><Link to='/privacy'>Privacy</Link> </div>
                <span> . </span>
                <div className="bottom_banner_left_cell"><Link to='/terms'>Terms</Link> </div>
                <span> . </span>
                <div className="bottom_banner_left_cell"><Link to='/sitemap'>Sitemap</Link> </div>
                <span> . </span>
                <div className="bottom_banner_left_cell"><a href="https://www.npmjs.com/package/react-full-screen">UK Modern Slavery Act</a></div>
                <span> . </span>
                <div className="bottom_banner_left_cell"><Link to='/company-details'>Company details</Link> </div>
                <span> . </span>
                <div className="bottom_banner_left_cell">Destinations</div>
            </div>
            <div className="bottom_banner_right">
                
                <div className="bottom_banner_left_cell--globe">
                    
                    <button className="button_english" onClick={() => setShowLanguage(true)}>
                         <FontAwesomeIcon style={{color:"black"}} icon={faGlobe}/>
                         <div>English (GB)</div>
                    </button>
                    
                </div>
                <div className="bottom_banner_left_cell--currency" onClick={() => setShowCurrency(true)}>
                    <div>£ </div>  
                    <div>GBP</div>
                    
                </div>
                <div className="bottom_banner_left_cell--support">
                    <div>Support & resources</div>
                    <div><FontAwesomeIcon style={{color:"black"}} icon={faChevronUp}/></div>
                </div>
            </div>
            
        </div>


        </>
     );
}
 
export default Bottom_banner;