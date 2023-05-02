// CSS, routes....
import "./LoginAndSingup.css"

// React components functions
import {useContext, useState} from "react";
import { AuthContext } from "../context/authContext";
import {Link, useNavigate} from "react-router-dom";


const Login = () => {

        // Getter and setter for Login and password data.
    const [loginInput, setLoginInput] = useState({
        username: "",
        password: ""
    })
        // Getter and setter for errors should any occur.
     const [error, setError] = useState(null);

        // To navigate to user's home page.
    const navigate = useNavigate();

        // onChangeHandler for login form.
    const changeHandler = (e) => {
        setLoginInput((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }));
    };


    // Login function form authContext.
     const { login } = useContext(AuthContext);

        //onClick handler for the login button.
    const loginHandler = async (e) => {
         e.preventDefault();

         try {
             await login(loginInput);
             //navigate("/home")
         }
         catch (err){
             setError(err.response.data);
         }
    };


    console.log(loginInput);


    return(
        <div className="loginBody">
            <div className="loginTitle">
                <h1> Every Voice Matters. </h1>
            </div>
            <div className= "logInFrame">
                <div className="logInFrameText">
                    <p> Blue Canary </p>
                </div>
                {error && error}
                <form>
                    <input type="text"
                           onChange={changeHandler}
                           name="username"
                           placeholder="Username"
                           autoComplete="on"
                           required/> <br/>
                    <input type="password"
                           onChange={changeHandler}
                           name="password"
                           placeholder="Password"
                           required/> <br/>
                    <button className="submitButton"
                            type="submit"
                            onClick={loginHandler}>Login
                            {/*<Link to="/home">Login</Link>*/}
                    </button>
                </form>
                <hr/>
                <div className=" links ">
                        {/*Link to Sign up, and recover password pages.*/}
                    <Link to="/signUp">Sign up</Link>
                    <Link to="/recoverpassword">Forgot Password</Link>
                </div>
            </div>
        </div>
    );
}


export default Login;



