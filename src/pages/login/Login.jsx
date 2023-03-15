// Components and other files.
import "./Login.css"
import SignUp from "../signup/SignUp";
import Home from "../home/Home";

// React components functions
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {Routes} from "react-router";
import {useEffect, useState} from "react";




const Login = () => {

    // Login and password variables.
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    //const [token, setToken] = useState();

    async function login()
    {
       // console.warn(userName, password);
       // const item = {userName, password};
       // const result = await fetch("")
    }
   /*
    if(!token)
    {
        return <Login setToken={setToken } />
    }
*/

    console.log("Username: " + userName);
    console.log("Password: " + password);

    return(
        <>
        <Router>
            <div className=" loginTitle">
                <h1> Every Voice Matters. </h1>
            </div>

            <div className= "logInFrame">
                <div className=" logInFrameText ">
                    <p> Blue Canary </p>
                </div>
                <form>
                    <input type="email"
                           onClick={(e) => setUserName(e.target.value)}
                           onChange={(e) => {setUserName(e.target.value)}}
                           name="username"
                           placeholder=" Username "
                           autoComplete="off"
                           required/> <br/>
                    <input type="password"
                           onClick={(e) => setPassword(e.target.value)}
                           onChange={(e) => {setPassword(e.target.value)}}
                           name=" password "
                           placeholder=" Password "
                           required/> <br/>
                    <input type="submit"
                           onClick={login}
                           className="submitButton"
                           value=" Log In " />
                </form>
                <hr/>
                <div className=" links ">

                        <nav>
                            <Link to="/Forgot_Password">Forgot Password</Link> <br/>
                            <Link to="/SignUp"> Sign Up </Link>
                        </nav>
                        <Routes>
                            <Route exact path="../login/" element={<Login />}/>
                            <Route path="../signup/" element={<SignUp />}  />
                            <Route path="Forgot_Password" />
                        </Routes>
                </div>
            </div>
        </Router>
        </>

    );
}


export default Login;