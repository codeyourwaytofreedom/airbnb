import language_pairs from "./langs.json";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Currency = () => {
    const [clicked_one, setClicked] = useState(" ");
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        axios.get("https://openexchangerates.org/api/currencies.json").then((response) => {
            
            let arr = []
            for (var key in response.data) {
                if (response.data.hasOwnProperty(key)) 
                {
                    arr.push({symbol:key, long:response.data[key]})
                }
            }
            arr.sort()
            setCurrencies(arr);
          });

    }, []);


    return ( 
        <div className="modal_panel_language-shell">
        <div className="language_options">
                <h3>Choose a currency</h3>
                <div className="all_languages">
                    
                    {
                    currencies.map((element, index) => 
                   
                        
                            <div className="language" key={index} 
                                onClick={()=>setClicked(element.long)}
                                style={{border: clicked_one===element.long ? "1px solid #222222" : "1px solid white"}}
                                >
                                <div className="up">{element.long}</div>
                                <div className="down">{element.symbol}</div>
                            </div>
                        

                    )
                    }
                </div>
        </div>
        
    </div>

     );
}
 
export default Currency;