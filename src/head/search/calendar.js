


const Calendar = () => {

    const [value, onChange] = useState(new Date());

    return ( 
                <Calendar onChange={onChange} value={value} />
     );
}
 
export default Calendar;