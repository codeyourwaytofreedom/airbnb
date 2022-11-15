import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import { useState,useRef } from 'react';
import Calendar_comp from "./calendar";
import Who from './who';
import { useEffect } from 'react';


const Search_extension = ({setExtension_vis}) => {

    const [search_kernel_index, setKernelindex] = useState(1);
    const choose_dates = useRef();
    const flexible = useRef();
    const start_focus = useRef();

    const [where_available, setWhereavailable] = useState(true)
    const [checkin_available, setCheckavailable] = useState(false)
    const [who_available, setWhoavailable] = useState(false)
    const where = useRef();
    const check = useRef();
    const who = useRef();
    const modal_background = useRef();



    useEffect(()=> {
        start_focus.current.focus();
    }, [])

    useEffect(()=> {
        const outside_where = (e) =>{
            if(!where.current && !check.current && !who.current && modal_background.current.contains(e.target))
            {console.log("clicked on modal background while ")
             setExtension_vis(false)
            }

            if(where.current && !where.current.contains(e.target))
            {
                setWhereavailable(false)
            }
            if(check.current && !check.current.contains(e.target))
            {
                setCheckavailable(false)
            }
            if(who.current && !who.current.contains(e.target))
            {
                setWhoavailable(false)
            }
        }
        document.addEventListener("mousedown", outside_where)

    })





    return ( 
    
                
                <div className="hd_search_extension_to_center">
                    <div>
                        <div className='white_background'>
                           <div className="click-extension" >
                            <div className="stays_tab" tabIndex={1} onClick={() => {setKernelindex(1); setWhereavailable(true)}} 
                            ref={start_focus}>
                                <div className="stays_tab_shell">
                                    <div className="top">Where</div>
                                    <div className="bottom">Search destinations</div>
                                </div>                            
                            </div>
                            <div className="buffer"></div>
                            <div className="stays_tab" tabIndex={2} onClick={() => {setKernelindex(2); setCheckavailable(true)}}>
                                <div className="stays_tab_shell">
                                    <div className="top">Check-in</div>
                                    <div className="bottom">Add dates</div>
                                </div>
                                
                            </div>
                            <div className="buffer"></div>
                            <div className="stays_tab" tabIndex={3} onClick={() => {setKernelindex(3); setCheckavailable(true) }}>
                                <div className="stays_tab_shell">
                                    <div className="top">Check-out</div>
                                    <div className="bottom">Add dates</div>
                                </div>
                                
                            </div>
                            <div className="buffer"></div>
                            <div className="stays_tab" id="who" tabIndex={4} onClick={() => {setKernelindex(4);setWhoavailable(true) }}>
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
                            {where_available ?

                                <div className='where_dropdown' ref={where} 
                                style={{display: where_available ? "grid" : "none"}}
                                >
                                    <div className='search_by_region'>Search by region</div>
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

                            : checkin_available ?
                                <div className='checkin_dropdown' ref={check}>
                                    <div className='checkin_dropdown_options'>
                                        <div tabIndex={1} ref={choose_dates} 
                                        style={{backgroundColor: search_kernel_index===2 || search_kernel_index===3 ? "white" : "gray"}}>
                                            <button onClick={()=> choose_dates.current.focus()}>Choose dates</button>
                                        </div>
                                        <div tabIndex={2} ref={flexible}>
                                            <button onClick={()=> flexible.current.focus()}>I'm flexible</button>
                                        </div>
                                    </div>
                                    <div className='checkin_dropdown_calendar_shell'>
                                            <Calendar_comp/>
                                    </div>
                                </div>

                            : who_available ?
                            <div className='who_dropdown' ref={who}>
                                <Who/>
                            </div>
                            :
                            null
                            }
                            </div>
                        </div>                      
                
                    <div className='modal' ref={modal_background}></div> 
                          
                    </div>
                </div>
                
        
        

     );
}
 
export default Search_extension;