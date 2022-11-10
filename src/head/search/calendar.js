import { useState,useRef } from 'react';
import { DatePicker } from 'antd';
import "./calendar.css";


const Calendar_comp = () => {

    const [value, onChange] = useState(new Date());
    const { RangePicker } = DatePicker;


    return ( 

            <div>
                <RangePicker
                open={true}
                style={{ visibility: "hidden", width: 0 }}
                // className={"ttt"}
                ></RangePicker>
            </div>
     );
}
 
export default Calendar_comp;