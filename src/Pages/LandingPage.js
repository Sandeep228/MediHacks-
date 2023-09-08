// import Navbar from '../components/Navbar';
// import Features from "../components/ForLandingPage/Features";
import MainPage from "../components/ForLandingPage/MainPage";
import SectionPage1 from "../components/ForLandingPage/SectionPage1";

function LandingPage() {
  return (
    <div className="landingPage">
      <div className="innerDiv">
        {/* <Navbar /> */}

        <MainPage />
        <SectionPage1 />
        {/* <Features /> */}
      </div>
    </div>
  );
}

export default LandingPage;
