import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMinus, faPlus, faClose} from '@fortawesome/free-solid-svg-icons';
import { useState,useRef } from 'react';
import Calendar_comp from "./calendar";
import Who from './who';
import { useEffect } from 'react';


const Search_extension = ({setExtension_vis}) => {

    const flexible = useRef();

    const [selected_tab, setTab] = useState("checkin")
    
    const where = useRef();
    const check = useRef();
    const who = useRef();
    const modal_background = useRef();

    const [dates, setDates] = useState({ startDate: null, endDate: null });

    useEffect(()=> {
        const outside_where = (e) =>{
            if(!where.current && !check.current && !who.current && modal_background.current && modal_background.current.contains(e.target))
            {
             setExtension_vis(false)
            }

            if(where.current && !where.current.contains(e.target))
            {
                setTab("")
            }
            if(check.current && !check.current.contains(e.target))
            {
                setTab("")
            }
            if(who.current && !who.current.contains(e.target))
            {
                setTab("")
            }
        }
        document.addEventListener("mousedown", outside_where)
    })

    useEffect(()=> {
            if(dates.startDate && !dates.endDate || dates.startDate && dates.endDate)
            {setTab("checkout")}
    }, [dates])



    const handle_day_count = (e) =>{
        e.stopPropagation();
        if(dates.startDate)
        {console.log(dates.startDate.format("MMM Do"))}
        else{setExtension_vis(false)}
        if(dates.startDate && dates.endDate)
        {console.log(dates.endDate.diff(dates.startDate, "days"))}
    }

    return ( 
    
                
                <div className="hd_search_extension_to_center">
                    <div>
                        <div className='white_background'>
                           <div className="click-extension" >
                            <div className="stays_tab" tabIndex={1} onClick={() => {setTab("where")}} 
                            style={{
                                backgroundColor: selected_tab==="where" ? "white" : "#eeebeb",
                                boxShadow: selected_tab==="where" ? "0px 8px 8px 8px rgb(240, 239, 239)" : "none"
                            }}>
                                <div className="stays_tab_shell">
                                    <div className="top">Where</div>
                                    <div className="bottom">Search destinations</div>
                                </div>                            
                            </div>
                            <div className="buffer"></div>
                            <div className="stays_tab" tabIndex={2} onClick={() => {setTab("checkin")}}
                                style={{
                                    backgroundColor: selected_tab==="checkin" ? "white" : "#eeebeb",
                                    boxShadow: selected_tab==="checkin" ? "0px 8px 8px 8px rgb(240, 239, 239)" : "none"
                                }}>
                                <div className="stays_tab_shell">
                                    <div className="top">Check-in</div>
                                    <div className="bottom">{dates.startDate ? dates.startDate.format("MMM Do") : "Add dates"}</div>
                                    <div className='cancel_select' 
                                            onClick={(e)=> {setDates({ startDate: null, endDate: null })}}
                                            style={{display: dates.startDate && selected_tab ==="checkin" ? "grid" : "none"}}
                                            >
                                        <FontAwesomeIcon icon={faClose} color={"white"} />
                                    </div>
                                </div>
                                
                            </div>
                            <div className="buffer"></div>
                            <div className="stays_tab" tabIndex={3} onClick={() => { setTab("checkout") }}
                                style={{
                                    backgroundColor: selected_tab==="checkout" ? "white" : "#eeebeb",
                                    boxShadow: selected_tab==="checkout" ? "0px 8px 8px 8px rgb(240, 239, 239)" : "none"
                                }}>
                                <div className="stays_tab_shell">
                                    <div className="top">Check-out</div>
                                    <div className="bottom">{dates.endDate ? dates.endDate.format("MMM Do") : "Add dates"}</div>
                                </div>
                                
                            </div>
                            <div className="buffer"></div>
                            <div className="stays_tab" id="who" tabIndex={4} onClick={(e) => {e.stopPropagation();setTab("who") }}
                                style={{
                                    backgroundColor: selected_tab==="who" ? "white" : "#eeebeb",
                                    boxShadow: selected_tab==="who" ? "0px 8px 8px 8px rgb(240, 239, 239)" : "none"
                                }}>
                                <div className="stays_tab_shell">
                                    <div className="top">Who</div>
                                    <div className="bottom">Add guests</div>
                                </div>
                                <div className="stays_tab_search">
                                    <button id="search_button" onClick={(e)=>handle_day_count(e)}>
                                        <FontAwesomeIcon icon={faSearch} color={"white"} />
                                        <span>Search</span>
                                    </button>
                                </div>
                            </div>                         
                            </div> 
                        </div>

                        <div className='modal_kernel'>
                            <div className='modal_kernel_center'>
                            {selected_tab==="where" ?

                                <div className='where_dropdown' ref={where}>
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

                            : selected_tab==="checkin" || selected_tab==="checkout" ?
                                <div className='checkin_dropdown' ref={check}>
                                    <div className='checkin_dropdown_options'>
                                        <div tabIndex={1} 
                                        style={{backgroundColor: selected_tab==="checkin" || selected_tab==="checkout" ? "white" : "gray"}}>
                                            <button>Choose dates</button>
                                        </div>
                                        <div tabIndex={2} ref={flexible}>
                                            <button onClick={()=> flexible.current.focus()}>I'm flexible</button>
                                        </div>
                                    </div>
                                    <div className='checkin_dropdown_calendar_shell'>
                                            <Calendar_comp dates={dates} setDates={setDates}/>
                                    </div>
                                </div>

                            : selected_tab==="who" ?
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