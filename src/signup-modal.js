import "./signup-modal.css";


const Signup = () => {
    return ( 
        <div className="md-bg">
                <div className="md-bg-inner">
                        <div><h3>Log in or Sign up!</h3></div>
                        <div><h3>Welcome to Airbnb</h3></div>
                        <form action="">
                            <select>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select> <br></br>
                            <input type="text" />
                            <button type="submit">Continue</button>
                        </form>
                        <div>
                            <button>Continue with XXXXXXXXXX</button>
                            <button>Continue with XXXXXXXXXX</button>
                            <button>Continue with XXXXXXXXXX</button>
                            <button>Continue with XXXXXXXXXX</button>
                        </div>

                </div>
        </div>
     );
}
 
export default Signup;