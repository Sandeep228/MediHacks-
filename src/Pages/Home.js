import React from "react";
import Main from "../components/ForHomePage/Main";
import Navbar from "../components/Common/Navbar";
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <>
      {isAuthenticated ? (
        <div className="home">
          <Navbar />
          <Main />
        </div>
      ) : (
        <p>Please login <a href="/" style={{color:"blue"}}>here</a></p>
      )}
    </>
  );
}

export default Home;
