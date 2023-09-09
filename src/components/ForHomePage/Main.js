import React from "react";
import Features from "../ForLandingPage/Features";

function Main() {

  return (
    <div className="h-main" style={{ width: "100%", height: "100vh", overflow:"hidden" }}>
      <div
        className="h-inner-content"
        style={{ width: "1300px", margin: "0 auto", padding: "40px 0" }}
      >
        <div></div>
        <div className="h-title">
          <h1
            style={{ justifyContent: "center", fontSize: "35px", fontWeight: "500", display:"flex", color:"green"}}
          >
           <h1 style={{color:"red"}}> MindAIgnite: &nbsp;</h1>Your Mental Wellness Companion
            {/* <img
              style={{ borderradius: "56px" }}
              src={user?.picture}
              alt="User Avatar"
            /> */}
          </h1>
          <p
            style={{ textAlign: "center", marginTop: "10px", fontSize: "20px" }}
          >
            Dedicated to nurturing your mental well-being with thoughtful
            features for an enjoyable, meaningful journey.
          </p>
        </div>

        <div className="h-cards">
          <Features />
        </div>
      </div>
    </div>
  );
}

export default Main;
