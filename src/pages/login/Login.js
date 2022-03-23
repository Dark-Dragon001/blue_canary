import "./Login.css"
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {Routes} from "react-router";
import {useEffect, useState} from "react";
import SignUp from "../signup/SignUp";
import {render} from "react-dom";




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
                    <input type="email" name="username" placeholder=" Username " autoComplete="off" required/> <br/>
                    <input type="password " name=" password " placeholder=" Password " required/> <br/>
                    <input type="submit" className="submitButton" value=" Log In " />
                </form>
                <hr/>
                <div className=" links ">
                    <Router>
                        <nav>
                            <Link to="/Forgot_Password">Forgot Password</Link> <br/>
                            <Link to="/SignUp"> Sign Up </Link>
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