import "./Friends.css";


const Friends = () => {
  return(
      <>
          <div className="friendsContainer">
              <ul className="friendsList">
                  <li className="friendsBar">
                      <img className="profileImage" src="assets/profilePic.webp" alt="Friend_profile_picture"/>
                      <h2 className="friendsName">
                          User007
                      </h2>
                  </li>
              </ul>
          </div>

      </>
  );
}


export default Friends;