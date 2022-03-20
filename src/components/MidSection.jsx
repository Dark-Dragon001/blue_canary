import "./MidSection.css"
const MidSection = () => {
  return(
      <>
          <div className="midContainer">
              <div className="userSection">
              </div>
              <div className="frindsSection">
                  <div className="friendsSectionTitle">
                      <h1> Friends </h1>
                  </div>
                  <hr className="hrLine"/>
                  <div className="frindsListSection">
                      <div className="listSection">
                          <div className="listContents">
                              <p> This is the list section. All friends accounts will be shown here. </p>
                          </div>

                      </div>

                  </div>


              </div>

          </div>
      </>
  );
}


export default MidSection;