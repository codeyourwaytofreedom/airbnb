import { useState,useRef } from 'react';
import "./calendar.css";


import Calendar from 'react-calendar';

const Calendar_comp = () => {
    const [value, onChange] = useState(new Date());
    



    return ( 
                <Calendar onChange={onChange} value={value} />           
     );
}
 
export default Calendar_comp;