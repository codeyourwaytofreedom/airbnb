import { useState,useRef } from 'react';

import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import "./calendar.css";




import Calendar from 'react-calendar';

const Calendar_comp = () => {



    return ( 
        <DayPickerRangeController
            startDate={null} // momentPropTypes.momentObj or null,
            endDate={null} // momentPropTypes.momentObj or null,
            onDatesChange={(null)} // PropTypes.func.isRequired,
            focusedInput={null} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={(null)} // PropTypes.func.isRequired,
            // initialVisibleMonth={() => moment().add(2, "M")} // PropTypes.func or null,
            numberOfMonths={2} 
            noBorder={true}
        />
     );
}
 
export default Calendar_comp;