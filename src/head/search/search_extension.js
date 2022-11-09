import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGlobe, faCircleUser, faBars } from '@fortawesome/free-solid-svg-icons';

const Search_extension = () => {
    return ( 
        <>
                
                <div className="hd_search_extension_to_center">
                    <div>
                        <div className='white_background'>
                           <div className="click-extension">
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

                        <div className='modal_kernel'>
                            <div className='modal_kernel_center'>
                                HELLO KERNEL
                            </div>
                        </div> 
                        <div className='modal'></div> 
                          
                    </div>
                </div>
                
        </>
        

     );
}
 
export default Search_extension;