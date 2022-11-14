import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import { useState,useRef } from 'react';

const Who = () => {

    const [adult_number, setAdultnumber] = useState(0)
    const [children_number, setChildrennumber] = useState(0)
    const [infant_number, setInfantnumber] = useState(0)
    const [pet_number, setPetnumber] = useState(0)

    const handle_decrease = () => {
            if(adult_number===0)
            {setAdultnumber(adult_number)}
            else{
                setAdultnumber(adult_number-1)
            }
    }
    const handle_increase = () => {
        if(adult_number===16 || adult_number+children_number ===16)
            {setAdultnumber(adult_number)}
            else{
                setAdultnumber(adult_number+1)
            }
    }

    const handle_children_decrease = () => {
        if(children_number===0)
        {setChildrennumber(children_number)}
        else{  setChildrennumber(children_number-1)}
    }

    const handle_children_increase = () => {
        if(children_number===16 || children_number+adult_number ===16)
        {setChildrennumber(children_number)}
        else{  setChildrennumber(children_number+1)}
    }

    const handle_infant_decrease = () => {
        if(infant_number===0)
        {return false}
        else{setInfantnumber(infant_number-1)}
    }
    const handle_infant_increase = () => {
        if(infant_number===5)
        {return false}
        else{setInfantnumber(infant_number+1)}
    }

    const handle_pet_decrease = () => {
        if(pet_number===0)
        {return false}
        else{setPetnumber(pet_number-1)}
    }
    const handle_pet_increase = () => {
        if(pet_number===5)
        {return false}
        else{setPetnumber(pet_number+1)}
    }

    return ( 

            <>
                <div className='choice'>
                        <div className='category'>
                            <div className='short'>Adults</div>
                            <div className='detailed'>Ages 13 or above</div>
                        </div>
                        <div>
                            <div className='minus' 
                                onClick={handle_decrease}
                                style={{opacity: adult_number===0 ? "0.2" : "1",
                                        cursor: adult_number===0 ? "not-allowed" : "pointer"}}
                                >
                                <button >
                                    <FontAwesomeIcon icon={faMinus} color={"gray"}/>
                                </button>
                                
                            </div>
                        </div>
                        <div>
                            <div className='number'>{adult_number}</div>
                        </div>
                        <div>
                            <div className='plus' 
                                onClick={handle_increase}
                                style={{opacity: adult_number===16 || adult_number+children_number===16 ? "0.2" : "1",
                                        cursor: adult_number===16  || adult_number+children_number===16 ? "not-allowed" : "pointer"}}
                                >
                                <button >
                                    <FontAwesomeIcon icon={faPlus} color={"gray"}/>
                                </button>
                            </div>
                        </div>                                            
                </div>

                <div className='choice'>
                        <div className='category'>
                            <div className='short'>Children</div>
                            <div className='detailed'>Ages 2–12</div>
                        </div>
                        <div>
                            <div className='minus' 
                                onClick={handle_children_decrease}
                                style={{opacity: children_number===0  ? "0.2" : "1",
                                        cursor: children_number===0 ? "not-allowed" : "pointer"}}
                                >
                                <button >
                                    <FontAwesomeIcon icon={faMinus} color={"gray"}/>
                                </button>
                                
                            </div>
                        </div>
                        <div>
                            <div className='number'>{children_number}</div>
                        </div>
                        <div>
                            <div className='plus' 
                                onClick={handle_children_increase}
                                style={{opacity: children_number===16 || adult_number+children_number===16 ? "0.2" : "1",
                                        cursor: children_number===16  || adult_number+children_number===16 ? "not-allowed" : "pointer"}}
                                
                                >
                                <button >
                                    <FontAwesomeIcon icon={faPlus} color={"gray"}/>
                                </button>
                            </div>
                        </div>                                            
                </div>

                <div className='choice'>
                        <div className='category'>
                            <div className='short'>Infants</div>
                            <div className='detailed'>Under 2</div>
                        </div>
                        <div>
                            <div className='minus' 
                                onClick={handle_infant_decrease}
                                style={{opacity: infant_number===0 ? "0.2" : "1",
                                        cursor: infant_number===0 ? "not-allowed" : "pointer"}}
                                >
                                <button >
                                    <FontAwesomeIcon icon={faMinus} color={"gray"}/>
                                </button>
                                
                            </div>
                        </div>
                        <div>
                            <div className='number'>{infant_number}</div>
                        </div>
                        <div>
                            <div className='plus' 
                                onClick={handle_infant_increase}
                                style={{opacity: infant_number===5 ? "0.2" : "1",
                                        cursor: infant_number===5 ? "not-allowed" : "pointer"}}
                                >
                                <button >
                                    <FontAwesomeIcon icon={faPlus} color={"gray"}/>
                                </button>
                            </div>
                        </div>                                            
                </div>

                <div className='choice'>
                        <div className='category'>
                            <div className='short'>Pets</div>
                            <div className='detailed'>Bringing a service animal?</div>
                        </div>
                        <div>
                            <div className='minus' 
                                onClick={handle_pet_decrease}
                                style={{opacity: pet_number===0 ? "0.2" : "1",
                                        cursor: pet_number===0 ? "not-allowed" : "pointer"}}
                                >
                                <button >
                                    <FontAwesomeIcon icon={faMinus} color={"gray"}/>
                                </button>
                                
                            </div>
                        </div>
                        <div>
                            <div className='number'>{pet_number}</div>
                        </div>
                        <div>
                            <div className='plus' 
                                onClick={handle_pet_increase}
                                style={{opacity: pet_number===5 ? "0.2" : "1",
                                        cursor: pet_number===5 ? "not-allowed" : "pointer"}}
                                >
                                <button >
                                    <FontAwesomeIcon icon={faPlus} color={"gray"}/>
                                </button>
                            </div>
                        </div>                                            
                </div>
            </>
                
                


     );
}
 
export default Who;