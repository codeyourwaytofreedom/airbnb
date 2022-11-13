import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import { useState,useRef } from 'react';

const Who = ({short, detailed}) => {


    return ( 
                
                <div className='choice'>
                        <div className='category'>
                            <div className='short'>{short}</div>
                            <div className='detailed'>{detailed}</div>
                        </div>
                        <div>
                            <div className='minus'>
                                <button>
                                    <FontAwesomeIcon icon={faMinus} color={"gray"}/>
                                </button>
                                
                            </div>
                        </div>
                        <div>
                            <div className='number'>0</div>
                        </div>
                        <div>
                            <div className='plus'><FontAwesomeIcon icon={faPlus} color={"gray"}/></div>
                        </div>                                            
                </div>


     );
}
 
export default Who;