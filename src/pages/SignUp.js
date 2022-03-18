import "./SignUp.css";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {Routes} from "react-router";
import Login from "./Login";

const SignUp = () =>
{

    return(
        <>
            <div className=" loginTitle">
                <h1> Every Voice Matters. </h1>
            </div>

        <div className=" signUpFrame ">
            <div className=" frameText ">
                <p> Blue Canary </p>
            </div>
            <div className=" signUpForm ">
                <form>
                    <input className="signUpUserName" type="text" placeholder=" User Name "/> <br/>
                    <input className="name" type="text" placeholder=" Name "/> <br/>
                    <input className="surName" type="text" placeholder=" SurName "/> <br/>
                    <input className=" emailAddress " type=" email " placeholder=" Email address "/> <br/>
                    <input className=" signUpPassword" type="password" placeholder=" Password "/> <br/>
                    <p className="DOB"> Date of birth</p> <br/>
                    <input className="signUpDate" type="date" /> <br/>
                    <input className="singUpButton" type="submit" value=" Sign Up "/> <br/>
                </form>
                <Router>
                        <nav>
                            <Link to="./Login"> Log in  </Link>
                               <p className="loginLink">

                                   if you already have and account
                               </p>
                        </nav>
                    <Routes>
                        <Route path="./Login" element={<Login />} />
                    </Routes>
                </Router>
            </div>
        </div>

        </>
    );


}
export default SignUp;