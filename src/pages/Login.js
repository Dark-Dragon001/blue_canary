import "./Login.css"
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {Routes} from "react-router";
import SignUp from "./SignUp";

const Login = () => {

    return(

        <>
            <div className=" loginTitle">
                <h1> Every Voice Matters. </h1>
            </div>

        <div className= "logInFrame">
            <div className=" logInFrameText ">
                <p> Blue Canary </p>
            </div>
            <form>
                <input type="email" name="username" placeholder=" Username "/> <br/>
                <input type="password " name=" password " placeholder=" Password "/> <br/>
                <input type="submit" value=" Log In " />
            </form>
            <hr/>
            <div className=" links ">
                <Router>
                    <nav>
                        <Link to="/Forgot_Password">Forgot Password</Link> <br/>
                        <Link to="./SignUp"> Sign Up </Link>
                    </nav>
                    <Routes>
                        <Route path="/SignUp" element={<SignUp />} />
                    </Routes>
                </Router>
            </div>
        </div>
        </>

    );

}


export default Login;