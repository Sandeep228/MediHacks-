import Sp1Card from "../SmallComponents/Sp1Card";
import Sp1Navbar from "./Sp1Navbar";
import { mentalHealthBenefitsData } from "../../assets/mentalHealthBenefitsData";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function SectionPage1() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  const handleAuth = async () => {
    await loginWithRedirect();
  };
  return (
    <div
      className="section-page-1"
      id="welcomePage"
      style={{ height: "100vh", width: "100%" }}
    >
      <Sp1Navbar />

      <div
        className="sp1-main"
        style={{
          maxWidth: "100%",
          minWidth: "300px",
          height: "100vh",
          padding: "110px 0",
        }}
      >
        <div
          className="sp1-title"
          style={{ width: "100%", textAlign: "center" }}
        >
          <h1 style={{ fontSize: "40px", fontWeight: "300" }}>
            MindAIgnite: Where Mental Health Meets Technology
          </h1>
        </div>
        <div
          className="sp1-tagline"
          style={{ textAlign: "center", fontSize: "25px", margin: "10px 0" }}
        >
          <h1>"Because Mental Health Is a Journey, Not a Destination"</h1>
        </div>

        <div
          className="sp1-btn"
          style={{
            fontSize: "25px",
            margin: "40px 0",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          MindAIgnite empowers you to assess your mental health confidently in
          minutes
          <Link
            onClick={handleAuth}
            // to="/mentalHealthCheckup"
            style={{
              width: "250px",
              backgroundColor: "#fff",
              padding: "15px",
              borderRadius: "50px",
              background:
                "linear-gradient(90deg, rgba(87,241,193,1) 24%, rgba(152,214,237,1) 81%)",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 20px 10px",
              margin: "25px auto",
              display: "block",
            }}
          >
            Click here to Try
          </Link>
        </div>

        <div
          className="sp1-need"
          style={{ maxWidth: "1400px", margin: "40px auto 0" }}
        >
          <div
            className="sp1-card-title"
            style={{ fontSize: "25px", fontWeight: "500", marginLeft: "20px" }}
          >
            Why people should check their mental health regularly:
          </div>

          <div
            className="sp1-cards"
            style={{ margin: "10px 0", display: "flex", flexWrap: "wrap" }}
          >
            {mentalHealthBenefitsData.map((benefit, index) => (
              <Sp1Card
                key={index}
                title={benefit.title}
                desc={benefit.description}
              />
            ))}
          </div>
          <p style={{ marginLeft: "20px", color: "rgb(177 255 227)" }}>
            And many more . . .
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionPage1;
