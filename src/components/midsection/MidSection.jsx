import "./MidSection.css"
import Friends from "../friends/Friends";
import UserActivity from "../userActivity/UserActivity";
const MidSection = () => {
  return(
      <>
          <div className="midContainer">
              <div className="userSection">
                  <UserActivity />
              </div>
              <div className="friendsSection">
                  <div className="friendsSectionTitle">
                      <h1> Friends </h1>
                  </div>
                  <hr className="hrLine"/>
                  <div className="friendsListSection">
                      <div className="listSection">
                          <div className="listItems">
                              <Friends />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}


export default MidSection;