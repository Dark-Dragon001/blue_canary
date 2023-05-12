import "./LoginAndSingup.css";
import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const SignUp = () =>
{
       //Setter and Getter object for signup data.
    const [formInputs, setFormInputs] = useState({
        name: "",
        surname: "",
        email: "",
        username: "",
        password: "",
        dateOfBirth: "",
    });

        // Setter and Getter for error occurring.
    const [error, setError] = useState(null)

        //onChangeHandler for each input field of the form
    const changeHandler = (e) => {
        setFormInputs((prev) => ({
            ...prev, [e.target.name]: e.target.value}));
    };

        //onClick handler for the submit button.
    const registerHandler = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/auths/register", formInputs);
        }
        catch (err){
            setError(err.response.data);
        }
    };

    console.log(formInputs);



    return(
        <div className="signUpBody">
            <div className=" loginTitle">
                <h1> Every Voice Matters. </h1>
            </div>

        <div className=" signUpFrame ">
            <div className="signUpFrameText">
                <p> Blue Canary </p>
            </div>
            {error && error}
            <div className="signUpForm">
                <form>
                    <input className="name"
                        name= "name"
                        type="text"
                        placeholder="Name"
                        onChange={changeHandler}
                        required/> <br/>
                    <input className="surName"
                        name= "surname"
                        type="text"
                        placeholder="Surname"
                        onChange={changeHandler}
                        autoComplete="on"
                        required/> <br/>
                    <input className="emailAddress"
                        name= "email"
                        type="email"
                        placeholder="Email address"
                        onChange={changeHandler}
                        required/> <br/>
                    <input className="signUpUserName"
                        name= "username"
                        type="text"
                        placeholder="Username"
                        onChange={changeHandler}
                        required/> <br/>
                    <input className="signUpPassword"
                           name= "password"
                           type="password"
                           placeholder="Password"
                           onChange={changeHandler}
                           required/> <br/>
                    <p className="DOB"> Date of birth</p> <br/>
                    <input className="signUpDate"
                           name="dateOfBirth"
                           type="date"
                           onChange={changeHandler}
                           required/> <br/>
                    <input className="singUpButton"
                            type="submit"
                           value=" Sign Up "
                           onClick={registerHandler}/> <br/>
                </form>
                <div>
                        {/*Link to login page.*/}
                    <p className="singUpLinkCont">if you already have and account <Link className="linkToLogin" to="/">Log in</Link> </p>

                </div>
            </div>
        </div>

        </div>
    );


}
export default SignUp;

