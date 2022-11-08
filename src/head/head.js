import "../head/head.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGlobe, faCircleUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Signup from "./signup/signup-modal";


const Head = () => {
    const [open_drop, setOpen_drop] = useState(false);
    const [signup_modal, setSM] = useState(false)

    const handle_drop_click = () => {
                setSM(true);
                setOpen_drop(false)
    }



    let drop_down_ref = useRef();

    useEffect( () => {
        const outclickhandler = (event) => {
                                if (!drop_down_ref.current.contains(event.target))
                                {
                                    setOpen_drop(false);
                                }
                            }

        document.addEventListener("mousedown", outclickhandler );

        return () => {
            document.removeEventListener("mousedown", outclickhandler)
        }

        });

    return ( 
    <div className="head">
        <div className="hd">
            <div className="hd_logo">
                <svg style={{fill:"#FF4146", width:"102", heigth:"32" }}  xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320.1 99.9">
                    <path  d="M168.7,25.1c0,3.6-2.9,6.5-6.5,6.5s-6.5-2.9-6.5-6.5s2.8-6.5,6.5-6.5C165.9,18.7,168.7,21.6,168.7,25.1z
                    M141.9,38.2c0,0.6,0,1.6,0,1.6s-3.1-4-9.7-4c-10.9,0-19.4,8.3-19.4,19.8c0,11.4,8.4,19.8,19.4,19.8c6.7,0,9.7-4.1,9.7-4.1v1.7
                    c0,0.8,0.6,1.4,1.4,1.4h8.1V36.8c0,0-7.4,0-8.1,0C142.5,36.8,141.9,37.5,141.9,38.2z M141.9,62.3c-1.5,2.2-4.5,4.1-8.1,4.1
                    c-6.4,0-11.3-4-11.3-10.8s4.9-10.8,11.3-10.8c3.5,0,6.7,2,8.1,4.1V62.3z M157.4,36.8h9.6v37.6h-9.6V36.8z M300.8,35.8
                    c-6.6,0-9.7,4-9.7,4V18.7h-9.6v55.7c0,0,7.4,0,8.1,0c0.8,0,1.4-0.7,1.4-1.4v-1.7l0,0c0,0,3.1,4.1,9.7,4.1c10.9,0,19.4-8.4,19.4-19.8
                    C320.1,44.2,311.6,35.8,300.8,35.8z M299.2,66.3c-3.7,0-6.6-1.9-8.1-4.1V48.8c1.5-2,4.7-4.1,8.1-4.1c6.4,0,11.3,4,11.3,10.8
                    S305.6,66.3,299.2,66.3z M276.5,52.1v22.4h-9.6V53.2c0-6.2-2-8.7-7.4-8.7c-2.9,0-5.9,1.5-7.8,3.7v26.2h-9.6V36.8h7.6
                    c0.8,0,1.4,0.7,1.4,1.4v1.6c2.8-2.9,6.5-4,10.2-4c4.2,0,7.7,1.2,10.5,3.6C275.2,42.2,276.5,45.8,276.5,52.1z M218.8,35.8
                    c-6.6,0-9.7,4-9.7,4V18.7h-9.6v55.7c0,0,7.4,0,8.1,0c0.8,0,1.4-0.7,1.4-1.4v-1.7l0,0c0,0,3.1,4.1,9.7,4.1c10.9,0,19.4-8.4,19.4-19.8
                    C238.2,44.2,229.7,35.8,218.8,35.8z M217.2,66.3c-3.7,0-6.6-1.9-8.1-4.1V48.8c1.5-2,4.7-4.1,8.1-4.1c6.4,0,11.3,4,11.3,10.8
                    S223.6,66.3,217.2,66.3z M191.2,35.8c2.9,0,4.4,0.5,4.4,0.5v8.9c0,0-8-2.7-13,3v26.3h-9.6V36.8c0,0,7.4,0,8.1,0
                    c0.8,0,1.4,0.7,1.4,1.4v1.6C184.3,37.7,188.2,35.8,191.2,35.8z M91.5,71c-0.5-1.2-1-2.5-1.5-3.6c-0.8-1.8-1.6-3.5-2.3-5.1l-0.1-0.1
                    c-6.9-15-14.3-30.2-22.1-45.2l-0.3-0.6c-0.8-1.5-1.6-3.1-2.4-4.7c-1-1.8-2-3.7-3.6-5.5C56,2.2,51.4,0,46.5,0c-5,0-9.5,2.2-12.8,6
                    c-1.5,1.8-2.6,3.7-3.6,5.5c-0.8,1.6-1.6,3.2-2.4,4.7l-0.3,0.6C19.7,31.8,12.2,47,5.3,62l-0.1,0.2c-0.7,1.6-1.5,3.3-2.3,5.1
                    c-0.5,1.1-1,2.3-1.5,3.6c-1.3,3.7-1.7,7.2-1.2,10.8c1.1,7.5,6.1,13.8,13,16.6c2.6,1.1,5.3,1.6,8.1,1.6c0.8,0,1.8-0.1,2.6-0.2
                    c3.3-0.4,6.7-1.5,10-3.4c4.1-2.3,8-5.6,12.4-10.4c4.4,4.8,8.4,8.1,12.4,10.4c3.3,1.9,6.7,3,10,3.4c0.8,0.1,1.8,0.2,2.6,0.2
                    c2.8,0,5.6-0.5,8.1-1.6c7-2.8,11.9-9.2,13-16.6C93.2,78.2,92.8,74.7,91.5,71z M46.4,76.2c-5.4-6.8-8.9-13.2-10.1-18.6
                    c-0.5-2.3-0.6-4.3-0.3-6.1c0.2-1.6,0.8-3,1.6-4.2c1.9-2.7,5.1-4.4,8.8-4.4c3.7,0,7,1.6,8.8,4.4c0.8,1.2,1.4,2.6,1.6,4.2
                    c0.3,1.8,0.2,3.9-0.3,6.1C55.3,62.9,51.8,69.3,46.4,76.2z M86.3,80.9c-0.7,5.2-4.2,9.7-9.1,11.7c-2.4,1-5,1.3-7.6,1
                    c-2.5-0.3-5-1.1-7.6-2.6c-3.6-2-7.2-5.1-11.4-9.7c6.6-8.1,10.6-15.5,12.1-22.1c0.7-3.1,0.8-5.9,0.5-8.5c-0.4-2.5-1.3-4.8-2.7-6.8
                    c-3.1-4.5-8.3-7.1-14.1-7.1s-11,2.7-14.1,7.1c-1.4,2-2.3,4.3-2.7,6.8c-0.4,2.6-0.3,5.5,0.5,8.5c1.5,6.6,5.6,14.1,12.1,22.2
                    c-4.1,4.6-7.8,7.7-11.4,9.7c-2.6,1.5-5.1,2.3-7.6,2.6c-2.7,0.3-5.3-0.1-7.6-1c-4.9-2-8.4-6.5-9.1-11.7c-0.3-2.5-0.1-5,0.9-7.8
                    c0.3-1,0.8-2,1.3-3.2c0.7-1.6,1.5-3.3,2.3-5l0.1-0.2c6.9-14.9,14.3-30.1,22-44.9l0.3-0.6c0.8-1.5,1.6-3.1,2.4-4.6
                    c0.8-1.6,1.7-3.1,2.8-4.4c2.1-2.4,4.9-3.7,8-3.7c3.1,0,5.9,1.3,8,3.7c1.1,1.3,2,2.8,2.8,4.4c0.8,1.5,1.6,3.1,2.4,4.6l0.3,0.6
                    C67.7,34.8,75.1,50,82,64.9L82,65c0.8,1.6,1.5,3.4,2.3,5c0.5,1.2,1,2.2,1.3,3.2C86.4,75.8,86.7,78.3,86.3,80.9z"/>
                </svg>
            </div>






            <div className="hd_search">
                <div className="hd_search_shll">

                    <button className="hd_search_btn">
                        <div className="hd_search_btn_tx">Anywhere</div>
                    </button>
                    <span style={{width:"1px", height: "24px", backgroundColor:"#DDDDDD"}}></span>

                    <button className="hd_search_btn">
                        <div className="hd_search_btn_tx">Any week</div>
                    </button>
                    <span style={{width:"1px", height: "24px", backgroundColor:"#DDDDDD"}}></span>

                    <button style={{fontWeight:"400"}}  className="hd_search_btn">
                        <div className="hd_search_btn_tx">Add guests</div>
                    </button>

                        <div className="hd_search_icon">
                            <FontAwesomeIcon style={{color:"white"}} icon={faSearch}/>
                        </div>
                </div>
                <div className="hd_search_shll_extension-center">
                    <div className="hd_search_shll_click-extension">
                    <div className="stays_tab" tabIndex={1}>
                        <div className="stays_tab_shell">
                            <div className="top">Where</div>
                            <div className="bottom">Search destinations</div>
                        </div>
                        
                    </div>
                    <div className="buffer"></div>
                    <div className="stays_tab" tabIndex={2}>
                        <div className="stays_tab_shell">
                            <div className="top">Check-in</div>
                            <div className="bottom">Add dates</div>
                        </div>
                        
                    </div>
                    <div className="buffer"></div>
                    <div className="stays_tab" tabIndex={3}>
                        <div className="stays_tab_shell">
                            <div className="top">Check-out</div>
                            <div className="bottom">Add dates</div>
                        </div>
                        
                    </div>
                    <div className="buffer"></div>
                    <div className="stays_tab" id="who" tabIndex={4}>
                        <div className="stays_tab_shell">
                            <div className="top">Who</div>
                            <div className="bottom">Add guests</div>
                        </div>
                        <div className="stays_tab_search">
                             <button id="search_button">
                                <FontAwesomeIcon icon={faSearch} color={"white"} />
                                <span>Search</span>
                            </button>
                        </div>
                       
                        
                    </div>
                </div>
                </div>
                
                    
            </div>








            <div className="hd_user">
                <nav className="nav">
                    <div className="nav_left">
                        <Link to="/">Become a host</Link>
                        <div><FontAwesomeIcon style={{color:"black"}} icon={faGlobe}/></div>
                    </div >
                    <div className="nav_right">
                        <button onClick={() => setOpen_drop(!open_drop)}>
                            <div><FontAwesomeIcon style={{color:"gray"}} size={"l"} icon={faBars}/></div>
                            <div><FontAwesomeIcon style={{color:"gray"}} size={"2xl"} icon={faCircleUser}/></div>
                        </button>
                        { open_drop ?
                            <div className="nav_right_drp" ref={drop_down_ref}>
                            <div onClick={() => handle_drop_click()} style={{ fontWeight:"600"}}><Link>Sign up</Link></div>
                            <div><Link>Log in</Link></div>
                            <div><Link to="/host/homes">Host your home</Link></div>
                            <div><Link to="/host/experiences">Host an experience</Link></div>
                            <div><Link to="/help">Help</Link></div>
                        </div>
                        : null}
                    </div>
                </nav>
            </div>
        </div>
                            {
                                signup_modal &&
                                    <Signup setSM={setSM}/>
                            }
                            
    </div>
    

     );
}
 
export default Head;

