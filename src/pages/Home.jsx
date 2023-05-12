import "./Home.css";
import TopBar from "../components/topbar/TopBar";
import DownBar from "../components/downbar/DownBar";
import MidSection from "../components/midsection/MidSection";


const Home = () => {
  return(
      <>
          <div className="home">
              <TopBar />
              <MidSection />
              <DownBar />

          </div>
      </>

  );
}


export default Home;