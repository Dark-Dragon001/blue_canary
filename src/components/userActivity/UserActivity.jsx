import "./UserActivity.css";
import "../profilePic.webp";
import {AuthContext} from "../../context/authContext";
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import Posts from "../posts/Posts";



const UserActivity = () => {

    const [error, setError] = useState(null);

    const img1 = "https://t4.ftcdn.net/jpg/01/15/54/97/360_F_115549789_UxeJewo8VMYF9J1qzNdcZ4NvmuWECTxW.jpg";



        /* Current active username to send it as the username in the home page. */
    const { currentUser, logout } = useContext(AuthContext);


        // To navigate to login page.
    const navigate = useNavigate();

        //onClick handler for the logout button.
    const logoutClickHandler = async (e) => {
        e.preventDefault();

        try {
            await logout();
            navigate("/")
            alert("Successfully logged out!");
        }
        catch (err){
            setError(err.response.data);
            alert(error);
        }
    };



    return(
        <div className="userActivityCont">
            <div className="userInfoCont">
                <span id="userInfoSpan1">

                    <img
                        // src={currentUser?.profilePic}
                        src={img1}
                        // alt=""
                    />
                    {currentUser?.username}
                </span>
                <span id="userInfoSpan2"
                      onClick={logoutClickHandler}>
                    Logout
                </span>
            </div>
            <div className="userActivityPosts">
                <Posts />
                <Posts />
                <Posts />
            </div>


        </div>
    )

}

export default UserActivity;