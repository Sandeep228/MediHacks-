import fpImg from "../../assets/fp-img.png";

function MainPage() {
  return (
    <div className="mainSection" style={{ height: "100vh", width: "100%" }}>
      <div
        className="logo"
        style={{
          textAlign: "center",
          fontSize: "25px",
          padding: "30px 0",
          fontWeight: "600",
          width: "100%",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 20px 10px",
        }}
      >
        MindAIginite
      </div>
      <div
        className="innerMainContent"
        style={{ maxWidth: "1300px", minWidth: "300px", margin: "0px auto" }}
      >
        <div className="imc-content" style={{ padding: "80px 0" }}>
          <div
            className="imc-main"
            style={{
              display: "flex",
              margin: "0px 0",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              className="imc-tagline"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 20px 10px",
                background: "rgba(255, 255, 255, 0)",
                backdropFilter: "blur(10px)",
                maxWidth: "650px",
                minWidth: "280px",
                padding: "60px 80px",
                borderRadius: "10px",
                marginLeft: "90px",
              }}
            >
              <h1
                style={{
                  fontSize: "50px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                How are you doing today?
              </h1>
              <h2
                style={{
                  fontSize: "30px",
                  textAlign: "center",
                  margin: "20px",
                }}
              >
                Wanna Find Out . . .
              </h2>
              <a href="#welcomePage"  style={{
                    width: "200px",
                    cursor: "pointer",
                    margin: "0 auto",
                    backgroundColor: "rgb(31 198 215)",
                    textAlign: "center",
                    color: "#fff",
                    fontSize: "20px",
                    padding: "12px 18px",
                    borderRadius: "50px",
                    fontWeight: "550",
                    display:"block"
                  }}>
                
                  Click Here
                
              </a>
            </div>
            <div className="imc-pic" style={{ marginLeft: "20px" }}>
              <img src={fpImg} alt="brain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
