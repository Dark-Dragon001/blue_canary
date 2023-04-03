import "./Friends.css";
import {FriendsData} from "./FriendsData";



const Friends = () => {
  return(
      <>
          <div className="friendsContainer">


              {FriendsData.map((friend, id)=>{
                  return(
                      <div className="friendsList">
                          <span>
                              <img src={friend.image} alt="" className="friendsImage"/>
                          </span>
                          <span className="friendsName">
                                  {friend.name}
                          </span>
                      </div>
                  )}

              )}

          </div>

      </>
  );
}


export default Friends;