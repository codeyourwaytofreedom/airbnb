const Pricerange = ({av, repetition_array, min, 
                    max, pricemin, pricemax,
                    handle_input_min, handle_input_max,
                    handle_price_min, handle_price_max
                }) => {
                    console.log(repetition_array)
    return ( 

        <div className="panel_shell_options--priceRange">
        <h2>Price range</h2>
        <h3>The average nightly price is £{av}</h3>
        <div className="panel_shell_options--priceRange_chart">
        {
            repetition_array.map((o) => (
                     <div style={{ 
                                height:o}}
                     >
                        
                    </div>
            ))
        }
        </div>
        <div className="panel_shell_options--priceRange_slider">
            <input type="range" min={min} max={max} value={pricemin} 
                onChange={(event)=>handle_price_min(event)}
                onInput={(event)=>handle_input_min(event)}
            />
            <input type="range" min={min} max={max} value={pricemax}
                onChange={(event)=>handle_price_max(event)}
                onInput={(event)=>handle_input_max(event)}
            />
        </div>
        <div className="panel_shell_options--priceRange_inputs">
        
                <div className="panel_shell_options--priceRange_inputs_min">
                    <div className="panel_shell_options--priceRange_inputs_min_kernel">
                        <span>£</span>
                        <span className="max">min price</span>
                        <div>
                            <input type="text"  value={pricemin}
                            onChange={(event)=>handle_price_min(event)}
                            />
                        </div>
                    </div>
                </div>
                <div className="panel_shell_options--priceRange_inputs_dash">−</div>
                <div className="panel_shell_options--priceRange_inputs_max">
                    <div className="panel_shell_options--priceRange_inputs_max_kernel">
                        <span>£</span>
                        <span className="max">max price</span>
                        <div>
                            <input type="text" value={pricemax}
                            onChange={(event)=>handle_price_max(event)}
                            />
                        </div>
                    </div>
                </div>
       
                

        </div>
    </div>

     );
}
 
export default Pricerange;