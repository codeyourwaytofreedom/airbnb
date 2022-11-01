import "../modals/modal.css";

const countryCodes = require('country-codes-list')

console.log(typeof(countryCodes))

const arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

export const Lan = 
                <div className="modal_panel_language-shell">
                    <div className="translation">
                        <div className="translation_panel">
                            <div className="translation_panel_double">
                               <div className="translation_panel_double_action">Translation</div>
                                <div className="translation_panel_double_explain">
                                Automatically translate descriptions and reviews to English.
                                </div> 
                            </div>
                            <div className="toggle">
                                    <label className="switch">
                                        <input type="checkbox"/>
                                        <span className="slider round"></span>
                                    </label>
                            </div>
                            
                        </div>
                    </div>
                    <div className="language_options">
                            <h3>Choose a language and region</h3>
                            <div className="all_languages">
                                
                                {
                                arr.map((element, index) => 
                               
                                    
                                        <div className="language" key={index}>
                                            <div className="up">English</div>
                                            <div className="down">United States</div>
                                        </div>
                                    

                                )
                                }
                            </div>
                    </div>
                    
                </div>

export const Currency =
                <div>
                    Hello Currency
                </div>