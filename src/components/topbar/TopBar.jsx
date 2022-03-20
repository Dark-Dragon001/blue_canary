import "./TopBar.css";
import Login from "../../pages/Login";
import {Search} from "@material-ui/icons";

const TopBar = () => {
  return(
      <>
          <div className="topBar">
              <div className="topBarLeft">
                  <div className="searchBar">
                      <input className="search" type="search" placeholder="Search"/>
                      <Search className="searchIcon" />
                  </div>
                  <span className="navLinks">
                        <input className="newPost" type="button" value="New Post" />
                        <input className="profile" type="button" value="Profile" />
                        <input className="setting" type="button" value="Setting" />
                  </span>
                </div>
              <div className="topBarRight">
                      <p> Blue Canary</p>
                      <img src="assets/canary_icon.jpeg" alt="canary_icon"/>

              </div>

          </div>
      </>
  );
}

export default TopBar;