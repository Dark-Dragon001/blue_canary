import "./TopBar.css";
import Login from "./Login";
const TopBar = () => {
  return(
      <>
          <div className="topBar">
              <span className="topBarRight">
                  <p> Blue Canary</p>
              </span>

              <span className="topBarLeft">
                  <input className="search" type="search" placeholder="Search"/> <br/>
                  <input className="newPost" type="button" value="New Post" />
                 <input className="profile" type="button" value="Profile" />
                 <input className="setting" type="button" value="Setting" />
              </span>

          </div>
      </>
  );
}

export default TopBar;