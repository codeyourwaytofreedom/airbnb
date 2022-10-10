import "./filters.css";

const Filters = ({setShow}) => {
    return ( 

            <div className="filters_modal_panel">
                <button onClick={() => {setShow(false)}}>Click to close</button>
            
            </div>

     );
}
 
export default Filters;