import "./bottom_banner.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faChevronUp, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Bottom_banner = () => {
    return ( 
        <div className="bottom_banner">
            <div className="bottom_banner_left">
                <div className="bottom_banner_left_cell">© 2022 Airbnb, Inc.</div>
                <span> . </span>
                <div className="bottom_banner_left_cell">Privacy</div>
                <span> . </span>
                <div className="bottom_banner_left_cell">Terms</div>
                <span> . </span>
                <div className="bottom_banner_left_cell">Sitemap</div>
                <span> . </span>
                <div className="bottom_banner_left_cell">UK Modern Slavery Act</div>
                <span> . </span>
                <div className="bottom_banner_left_cell">Company details</div>
                <span> . </span>
                <div className="bottom_banner_left_cell">Destinations</div>
            </div>

            <div className="bottom_banner_right">
                <div className="bottom_banner_left_cell--globe">
                    <FontAwesomeIcon style={{color:"black"}} icon={faGlobe}/>
                    <div>English (GB)</div>
                    
                </div>
                <div className="bottom_banner_left_cell--currency">
                    <div>£ </div>  
                    <div>GBP</div>
                    
                </div>
                <div className="bottom_banner_left_cell--support">
                    <div>Support & resources</div>
                    <div><FontAwesomeIcon style={{color:"black"}} icon={faChevronUp}/></div>
                </div>
            </div>
        </div>
     );
}
 
export default Bottom_banner;