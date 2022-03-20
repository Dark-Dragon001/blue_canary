import "./DownBar.css"
const DownBar = () => {
  return(
      <>
          <div className="downBarContainer">
              <div className="leftBar">
                    <h2> Home </h2>
              </div>
              <div className="middleBar">
                  <h2> Canary Hutch </h2>
              </div>
              <div className="rightBar">
                  <h2> Channel </h2>
              </div>
          </div>
      </>

  );
}


export default DownBar;