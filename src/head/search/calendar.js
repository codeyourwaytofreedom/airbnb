import { useState,useRef } from 'react';
import { DatePicker } from 'antd';



const Calendar_comp = () => {

    const [value, onChange] = useState(new Date());
    const { RangePicker } = DatePicker;


    return ( 

            <div>
                <RangePicker></RangePicker>
            </div>
     );
}
 
export default Calendar_comp;