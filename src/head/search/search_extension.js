import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { useState,useRef } from 'react';
import Calendar_comp from "./calendar";

const Search_extension = () => {

    const [search_kernel_index, setKernelindex] = useState(1);
    const choose_dates = useRef();
    const flexible = useRef();

    const handle_search_kernel = (e) =>{
        e.stopPropagation();
        console.log(e)
    }
    return ( 
        <>
                
                <div className="hd_search_extension_to_center">
                    <div>
                        <div className='white_background'>
                           <div className="click-extension">
                            <div className="stays_tab" tabIndex={1} onClick={() => setKernelindex(1)}>
                                <div className="stays_tab_shell">
                                    <div className="top">Where</div>
                                    <div className="bottom">Search destinations</div>
                                </div>                            
                            </div>
                            <div className="buffer"></div>
                            <div className="stays_tab" tabIndex={2} onClick={() => setKernelindex(2)}>
                                <div className="stays_tab_shell">
                                    <div className="top">Check-in</div>
                                    <div className="bottom">Add dates</div>
                                </div>
                                
                            </div>
                            <div className="buffer"></div>
                            <div className="stays_tab" tabIndex={3} onClick={() => setKernelindex(3)}>
                                <div className="stays_tab_shell">
                                    <div className="top">Check-out</div>
                                    <div className="bottom">Add dates</div>
                                </div>
                                
                            </div>
                            <div className="buffer"></div>
                            <div className="stays_tab" id="who" tabIndex={4} onClick={() => setKernelindex(4)}>
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

                        {search_kernel_index===1 ?
                            <div className='modal_kernel'>
                                <div className='modal_kernel_center'>
                                    <div className='where_dropdown'>
                                        <div>Search by region</div>
                                        <div className='regions'>
                                            <div className='region'>
                                                <div className='image'>
                                                    <img src={require("./flexible.jpg")} alt="flex" />
                                                </div>
                                                <div className='text'>I am flexible</div> 
                                            </div>
                                            <div className='region'>
                                                <div className='image'>
                                                    <img src={require("./europe.webp")} alt="flex" />
                                                </div>
                                                <div className='text'>Europe</div> 
                                            </div>
                                            <div className='region'>
                                                <div className='image'>
                                                    <img src={require("./france.webp")} alt="flex" />
                                                </div>
                                                <div className='text'>France</div> 
                                            </div>
                                            <div className='region'>
                                                <div className='image'>
                                                    <img src={require("./flexible.jpg")} alt="flex" />
                                                </div>
                                                <div className='text'>United States</div> 
                                            </div>
                                            <div className='region'>
                                                <div className='image'>
                                                    <img src={require("./europe.webp")} alt="flex" />
                                                </div>
                                                <div className='text'>United Kingdom</div> 
                                            </div>
                                            <div className='region'>
                                                <div className='image'>
                                                    <img src={require("./france.webp")} alt="flex" />
                                                </div>
                                                <div className='text'>South America</div> 
                                            </div>


                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        : search_kernel_index===2 ?

                        <div className='modal_kernel'>
                                <div className='modal_kernel_center'>
                                    <div className='checkin_dropdown'>
                                        <div className='checkin_dropdown_options'>
                                            <div tabIndex={1} ref={choose_dates}>
                                                <button onClick={()=> choose_dates.current.focus()}>Choose dates</button>
                                            </div>
                                            <div tabIndex={2} ref={flexible}>
                                                <button onClick={()=> flexible.current.focus()}>I'm flexible</button>
                                            </div>
                                        </div>
                                        <div className='checkin_dropdown_calendar_shell'>
                                            <div className='calendar_left'>
                                                <Calendar_comp/>
                                            </div>
                                            <div className='calendar_right'>RIGHT</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        :
                        null
                        }
                         
                        <div className='modal'></div> 
                          
                    </div>
                </div>
                
        </>
        

     );
}
 
export default Search_extension;