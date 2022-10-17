import { useState } from "react";

const Hostlanguage = () => {

    const [show_more, setMore] = useState(false);

    return ( 

        <div className="panel_shell_options--language">
            <h2>Host language</h2>
            <div className="language">
                    <div className="language_cell">
                        <div id="cbox"><input type="checkbox" /></div>
                        <div id="place-type">English</div>
                    </div>
                    <div className="language_cell">
                        <div id="cbox"><input type="checkbox" /></div>
                        <div id="place-type">French</div>
                    </div>
                    <div className="language_cell">
                        <div id="cbox"><input type="checkbox" /></div>
                        <div id="place-type">German</div>
                    </div>
                    <div className="language_cell">
                        <div id="cbox"><input type="checkbox" /></div>
                        <div id="place-type">Japanese</div>
                    </div>

                    <div className="language_cell" style={{display: show_more ? "flex" : "none" }}>
                        <div id="cbox"><input type="checkbox" /></div>
                        <div id="place-type">Italian</div>
                    </div>

                    <div className="language_cell" style={{display: show_more ? "flex" : "none" }}>
                        <div id="cbox"><input type="checkbox" /></div>
                        <div id="place-type">Russian</div>
                    </div>

                    <div className="language_cell" style={{display: show_more ? "flex" : "none" }}>
                        <div id="cbox"><input type="checkbox" /></div>
                        <div id="place-type">Spanish</div>
                    </div>

                    <div className="language_cell" style={{display: show_more ? "flex" : "none" }}>
                        <div id="cbox"><input type="checkbox" /></div>
                        <div id="place-type">Chinese</div>
                    </div>

                    <div className="language_cell" style={{display: show_more ? "flex" : "none" }}>
                        <div id="cbox"><input type="checkbox" /></div>
                        <div id="place-type">Arabic</div>
                    </div>

                    <div className="language_cell" style={{display: show_more ? "flex" : "none" }}>
                        <div id="cbox"><input type="checkbox" /></div>
                        <div id="place-type">Portuegese</div>
                    </div>

                    <div className="language_cell" style={{display: show_more ? "flex" : "none" }}>
                        <div id="cbox"><input type="checkbox" /></div>
                        <div id="place-type">Turkish</div>
                    </div>

                    <div className="language_cell" style={{display: show_more ? "flex" : "none" }}>
                        <div id="cbox"><input type="checkbox" /></div>
                        <div id="place-type">Indonesian</div>
                    </div>


                    <div className="language_cell" style={{display: show_more ? "flex" : "none" }}>
                        <div id="cbox"><input type="checkbox" /></div>
                        <div id="place-type">Dutch</div>
                    </div>

                    <div className="language_cell" style={{display: show_more ? "flex" : "none" }}>
                        <div id="cbox"><input type="checkbox" /></div>
                        <div id="place-type">Korean</div>
                    </div>

                    <div className="language_cell" style={{display: show_more ? "flex" : "none" }}>
                        <div id="cbox"><input type="checkbox" /></div>
                        <div id="place-type">Thai</div>
                    </div>

                    <div className="language_cell" style={{display: show_more ? "flex" : "none" }}>
                        <div id="cbox"><input type="checkbox" /></div>
                        <div id="place-type">Greek</div>
                    </div>

                    <div className="language_cell" style={{display: show_more ? "flex" : "none" }}>
                        <div id="cbox"><input type="checkbox" /></div>
                        <div id="place-type">Sign</div>
                    </div>

                    <div className="language_cell" style={{display: show_more ? "flex" : "none" }}>
                        <div id="cbox"><input type="checkbox" /></div>
                        <div id="place-type">Hebrew</div>
                    </div>

                    <div className="language_cell" style={{display: show_more ? "flex" : "none" }}>
                        <div id="cbox"><input type="checkbox" /></div>
                        <div id="place-type">Polish</div>
                    </div>

                    <div className="language_cell" style={{display: show_more ? "flex" : "none" }}>
                        <div id="cbox"><input type="checkbox" /></div>
                        <div id="place-type">Danish</div>
                    </div>

                    <div className="language_cell" style={{display: show_more ? "flex" : "none" }}>
                        <div id="cbox"><input type="checkbox" /></div>
                        <div id="place-type">Swedish</div>
                    </div>

                    <div className="language_cell" style={{display: show_more ? "flex" : "none" }}>
                        <div id="cbox"><input type="checkbox" /></div>
                        <div id="place-type">Norwegian</div>
                    </div>

                    <div className="language_cell" style={{display: show_more ? "flex" : "none" }}>
                        <div id="cbox"><input type="checkbox" /></div>
                        <div id="place-type">Finnish</div>
                    </div>

                    <div className="language_cell" style={{display: show_more ? "flex" : "none" }}>
                        <div id="cbox"><input type="checkbox" /></div>
                        <div id="place-type">Czech</div>
                    </div>

                    <div className="language_cell" style={{display: show_more ? "flex" : "none" }}>
                        <div id="cbox"><input type="checkbox" /></div>
                        <div id="place-type">Hungarian</div>
                    </div>

                    <div className="language_cell" style={{display: show_more ? "flex" : "none" }}>
                        <div id="cbox"><input type="checkbox" /></div>
                        <div id="place-type">Ukranian</div>
                    </div>


                    <button className="show_more" 
                        onClick={() => {setMore(true)}}
                        style={{display: !show_more ? "grid" : "none" }}
                    >
                        <span>Show more</span>
                    </button>
                    <button className="show_less" 
                        onClick={() => {setMore(false)}}
                        style={{display: show_more ? "grid" : "none" }}
                    >
                        <span>Show less</span>
                    </button>
            </div>
        </div>

     );
}
 
export default Hostlanguage;