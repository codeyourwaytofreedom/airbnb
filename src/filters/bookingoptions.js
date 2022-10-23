const Bookingoptions = () => {
    return ( 


        <div className="panel_shell_options--bookingoptions">
                                <h2>Booking options</h2>
                                <br />
                                <div id="booking_triple">
                                    <div id="booking_double">
                                        <div id="booking-type">Instant Book</div>
                                        <div id="booking-detail">Listings you can book without waiting for host approval
                                        </div>
                                    </div>
                                    <div id="booking-switch">
                                    <label className="switch">
                                        <input type="checkbox"/>
                                        <span className="slider round"></span>
                                    </label>
                                    </div>
                                </div>        
                                <br />
                                <div id="booking_triple">
                                    <div id="booking_double">
                                        <div id="booking-type">Self check-in</div>
                                        <div id="booking-detail">Easy access to the property once you arrive</div>
                                    </div>
                                    <div id="booking-switch">
                                    <label className="switch">
                                        <input type="checkbox"/>
                                        <span className="slider round"></span>
                                    </label>
                                    </div>
                                </div>                    
        </div>

     );
}
 
export default Bookingoptions;