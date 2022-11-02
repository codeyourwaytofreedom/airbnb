import language_pairs from "./langs.json";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Currency = () => {
    const [clicked_one, setClicked] = useState(" ");
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        axios.get("https://openexchangerates.org/api/currencies.json").then((response) => {
            setCurrencies(response.data);
            console.log(response)
          });

    }, []);
    

    return ( 
        <div className="modal_panel_language-shell">
        <div className="language_options">
                <h3>Choose a currency{currencies && currencies.length}</h3>
                <div className="all_languages">
                    
                    {
                    language_pairs.map((element, index) => 
                   
                        
                            <div className="language" key={index} 
                                onClick={()=>setClicked(element.country)}
                                style={{border: clicked_one===element.country ? "1px solid #222222" : "1px solid white"}}
                                >
                                <div className="up">{element.lanaguage}</div>
                                <div className="down">{element.country}</div>
                            </div>
                        

                    )
                    }
                </div>
        </div>
        
    </div>

     );
}
 
export default Currency;