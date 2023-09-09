import { useState } from "react";
import React from "react";
import axios from "axios";
import jokeImg from "../../assets/joke-guy.png";
import jokePic from "../../assets/joke-woman.png";

function Main() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const getJoke = async () => {
    setLoading(true);

    const options = {
      method: "GET",
      url: "https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_X_RAPID_API_HOST,
      },
    };

    try {
      const response = await axios.request(options);
      if (response.data) {
        console.log(response.data);
        setJoke(response.data[0].joke);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="j-main" style={{ width: "100%", height: "100vh", overflow:"hidden" }}>
      <div
        className="j-inner-content"
        style={{ width: "1300px", margin: "0 auto", padding: "60px 0" }}
      >
        <div className="j-title" style={{ width: "100%", textAlign: "center" }}>
          <h1
            style={{ textAlign: "center", fontSize: "35px", fontWeight: "500" }}
          >
            Jokes to Lighten Your Day
          </h1>
          <p
            style={{ textAlign: "center", marginTop: "10px", fontSize: "20px" }}
          >
            Discover Laughter in Every Line
          </p>
          <button
            onClick={getJoke}
            style={{
              width: "200px",
              backgroundColor: "rgb(87 164 255)",
              color: "#fff",
              margin: "20px 0",
              borderRadius: "8px",
              padding: "8px 0px",
            }}
            disabled={loading} // Disable the button while loading
          >
            {loading ? "Loading..." : "Click for a Joke"}
          </button>
        </div>

        <div
          className="j-container"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img src={jokeImg} alt="nothing" style={{marginLeft: 30}} />

          <div
            className="joke-content"
            style={{
              width: "50%",
              height: "400px",
              backgroundColor: "rgba(255,255,255,0.3",
              backdropFilter: "blur(20px)",
              margin: "20px 40px",
              borderRadius: "20px",
              boxShadow: "rgba(0, 0, 0, 0.3) 7px 5px 30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px",
            }}
          >
            <p style={{ fontSize: "20px" }}>
              {loading ? "Loading joke..." : joke || "Click the button to read a Joke."}
            </p>
          </div>
          <img src={jokePic} alt="nothing" style={{ height: "400px" }} />
        </div>
      </div>
    </div>
  );
}

export default Main;