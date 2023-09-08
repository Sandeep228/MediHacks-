import laugh from "../../assets/laugh.gif";
import happy from "../../assets/happy.gif";
import game from "../../assets/game.gif";
import medicalReport from "../../assets/mediclaReport.gif";
import brain from "../../assets/brain.webp";
import doctors from "../../assets/doctors.gif";
import { Link } from "react-router-dom";
import "./Features.css";

function Features() {
  return (
    <div
      className="features-cards"
      style={{
        marginTop: "2px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        className="firstLayer"
        style={{
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to="/mentalHealthCheckup">
          <div
            className="feature-card"
            style={{
              overflow: "hidden",
              borderRadius: "10px",
              width: "300px",
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(20px)",
              boxShadow: "5px 10px 15px rgba(0,0,0,0.1)",
              margin: "15px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            
            <img
              src={medicalReport}
              alt="laugh"
              style={{ maxWidth: "100%", minWidth: "100%", height: "160px" }}
            />
            <div className="fc-content" style={{ padding: "10px 20px 20px" }}>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Mental Health Checkup
              </h1>
              <p style={{ textAlign: "justify" }}>
                Boost mood and cognition with engaging, interactive mood-lifting
                games.
              </p>
            </div>
          </div>
        </Link>

        <Link target="_blank" to="https://poki.com/en/online">
          <div
            className="feature-card"
            style={{
              overflow: "hidden",
              borderRadius: "10px",
              width: "300px",
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(20px)",
              boxShadow: "5px 10px 15px rgba(0,0,0,0.1)",
              margin: "20px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src={game}
              alt="laugh"
              style={{ maxWidth: "100%", minWidth: "100%", height: "160px" }}
            />
            <div className="fc-content" style={{ padding: "10px 20px 20px" }}>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Play Games
              </h1>
              <p style={{ textAlign: "justify" }}>
                Boost mood and cognition with engaging, interactive mood-lifting
                games.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/hearAjoke">
          <div
            className="feature-card"
            style={{
              overflow: "hidden",
              borderRadius: "10px",
              width: "300px",
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(20px)",
              boxShadow: "5px 10px 15px rgba(0,0,0,0.1)",
              margin: "20px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src={laugh}
              alt="laugh"
              style={{ maxWidth: "100%", minWidth: "100%", height: "160px" }}
            />
            <div className="fc-content" style={{ padding: "10px 20px 20px" }}>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Hear a Joke
              </h1>
              <p style={{ textAlign: "justify" }}>
                Discover moments of joy through our humor, guaranteed to bring
                smiles to brighten your day
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div
        className="secondLayer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to="/chatbot">
          <div
            className="feature-card"
            style={{
              overflow: "hidden",
              borderRadius: "10px",
              width: "300px",
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(20px)",
              boxShadow: "5px 10px 15px rgba(0,0,0,0.1)",
              margin: "20px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src={happy}
              alt="laugh"
              style={{ maxWidth: "250px", minWidth: "100%", height: "160px" }}
            />
            <div className="fc-content" style={{ padding: "10px 20px 20px" }}>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Talk to Us
              </h1>
              <p style={{ textAlign: "justify" }}>
                Connect with our friendly chatbot for instant support and
                guidance.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/recommendation">
          <div
            className="feature-card"
            style={{
              overflow: "hidden",
              borderRadius: "10px",
              width: "300px",
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(20px)",
              boxShadow: "5px 10px 15px rgba(0,0,0,0.1)",
              margin: "0 20px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src={brain}
              alt="laugh"
              style={{ maxWidth: "250px", minWidth: "100%", height: "160px" }}
            />
            <div className="fc-content" style={{ padding: "10px 20px 20px" }}>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Health Guidance
              </h1>
              <p style={{ textAlign: "justify" }}>
                Tailored mental health advice to meet your unique needs.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/doctorsNearYou">
          <div
            className="feature-card"
            style={{
              overflow: "hidden",
              borderRadius: "10px",
              width: "300px",
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(20px)",
              boxShadow: "5px 10px 15px rgba(0,0,0,0.1)",
              margin: "0 20px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src={doctors}
              alt="laugh"
              style={{ maxWidth: "250px", minWidth: "100%", height: "160px" }}
            />
            <div className="fc-content" style={{ padding: "10px 20px 20px" }}>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Doctors Near you
              </h1>
              <p style={{ textAlign: "justify" }}>
                Locate and connect with nearby mental health professionals
                easily
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Features;
