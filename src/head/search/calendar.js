import { useState,useRef } from 'react';

import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';



import Calendar from 'react-calendar';

const Calendar_comp = () => {
    



    return ( 
        <DayPickerRangeController
  startDate={null} // momentPropTypes.momentObj or null,
  endDate={null} // momentPropTypes.momentObj or null,
  onDatesChange={null} // PropTypes.func.isRequired,
  focusedInput={null} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  onFocusChange={null} // PropTypes.func.isRequired,
  initialVisibleMonth={null} // PropTypes.func or null,
/>
     );
}
 
export default Calendar_comp;