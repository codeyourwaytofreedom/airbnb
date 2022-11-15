import { useState,useRef } from 'react';

import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import "./calendar.css";




import Calendar from 'react-calendar';

const Calendar_comp = ({dates, setDates}) => {

    // const [dates, setDates] = useState({ startDate: null, endDate: null });
  
    const defaultFocusedInput = "startDate";
    const [focusedInput, setFocusedInput] = useState(defaultFocusedInput);

    const handleDatesChange = (dates) => {
      setDates(dates);
      console.log(dates.startDate._d)      
    };
  
    const onFocusChange = (focusedInput) => {
      setFocusedInput(focusedInput);
    }

    return ( 
        <DayPickerRangeController
            startDate={dates.startDate} 
            endDate={dates.endDate} 
            onDatesChange={handleDatesChange} 
            focusedInput={focusedInput || defaultFocusedInput} 
            onFocusChange={onFocusChange}
            numberOfMonths={2} 
            noBorder={true}
        />
     );
}
 
export default Calendar_comp;
