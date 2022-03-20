import "./Home.css";
import TopBar from "../../components/topbar/TopBar";
import Login from "../Login";
import DownBar from "../../components/downbar/DownBar";
import RightBar from "../../components/rightbar/RightBar";
import LeftBar from "../../components/leftbar/LeftBar";
import MidSection from "../../components/MidSection";


const Home = () => {
  return(
      <>
          <div className="home">
              <TopBar />
              <MidSection />
              <DownBar />




          </div>
          <footer>

          </footer>


      </>

  );
}


export default Home;