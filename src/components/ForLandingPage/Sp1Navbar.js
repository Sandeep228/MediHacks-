import React, { useState, useEffect } from "react";
import "./Sp1Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function Sp1Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    // Attach a scroll event listener to update the state
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  const handleAuth = async () => {
    await loginWithRedirect();
  };

  return (
    <div className={`sp1-navbar ${isNavbarVisible ? "visible" : ""}`}>
      <div className="container lime pullUp">
        <div
          className="sp1-logo"
          style={{ fontSize: "30px", fontWeight: "500", color: "#fff" }}
        >
          MindAIgnite
        </div>
        <div className="sp1-navLinks">
          <a onClick={handleAuth}>HOME</a>
          <a href="/about">ABOUT</a>
          <a href="/contact">CONTACT</a>
          <a onClick={handleAuth}>LOG IN</a>
        </div>
      </div>
    </div>
  );
}

export default Sp1Navbar;
