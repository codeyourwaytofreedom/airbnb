import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import { useState,useRef } from 'react';

const Who = ({short, detailed}) => {

    const [guest_number, setGnumber] = useState(0)
    const handle_decrease = () => {
            if(guest_number===0)
            {setGnumber(0)}
            else{
                setGnumber(guest_number-1)
            }
    }
    const handle_increase = () => {
        if(guest_number===16)
            {setGnumber(16)}
            else{
                setGnumber(guest_number+1)
            }
    }

    return ( 
                
                <div className='choice'>
                        <div className='category'>
                            <div className='short'>{short}</div>
                            <div className='detailed'>{detailed}</div>
                        </div>
                        <div>
                            <div className='minus' 
                                onClick={handle_decrease}
                                style={{visibility: guest_number===0 ? "hidden" : "visible"}}
                                >
                                <button >
                                    <FontAwesomeIcon icon={faMinus} color={"gray"}/>
                                </button>
                                
                            </div>
                        </div>
                        <div>
                            <div className='number'>{guest_number}</div>
                        </div>
                        <div>
                            <div className='plus' 
                                onClick={handle_increase}
                                style={{visibility: guest_number===16 ? "hidden" : "visible"}}
                                >
                                <button >
                                    <FontAwesomeIcon icon={faPlus} color={"gray"}/>
                                </button>
                            </div>
                        </div>                                            
                </div>


     );
}
 
export default Who;