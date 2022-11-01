import language_pairs from "./langs.json";
import { useState } from "react";

const Currency = () => {
    const [clicked_one, setClicked] = useState(" ");
    return ( 


        <div className="modal_panel_language-shell">
        <div className="language_options">
                <h3>Choose a currency</h3>
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