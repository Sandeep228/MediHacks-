import { Box, Tooltip } from "@chakra-ui/react";
import { ImHome } from "react-icons/im";
import { IoGameController } from "react-icons/io5";
import { IoIosPaper } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft, FaBrain } from "react-icons/fa";
import { FaUserDoctor, FaFaceLaughBeam } from "react-icons/fa6";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
function Navbar() {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  return (
    <Box
      style={{
        width: "80px",
        height: "100%",
        borderRadius: "15px",
        padding: "180px 50px 80px",
        position: "fixed",
        zIndex: "999",
      }}
    >
      <Box
        style={{
          maxWidth: "80px",
          minWidth: "80px",
          height: "auto",
          background: "rgba(255, 255, 255, 0.4)",
          borderRadius: "50px",
          margin: "0 auto",
          backdropFilter: "blur(10px)",
          transition: ".2s linear",
        }}
        className="navbar-shadow"
      >
        <div
          className="nav-Items"
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "column",
            padding: "40px 0",
          }}
        >
          <Tooltip label="Home" placement="right">
            <Link to="/home">
              <ImHome
                style={{
                  margin: "0px 0 20px",
                  fontSize: "30px",
                  cursor: "pointer",
                  color: "rgb(229 70 70)",
                }}
              />
            </Link>
          </Tooltip>

          <Tooltip label="Mental Health Form" placement="right">
            <Link to="/mentalHealthCheckup">
              <IoIosPaper
                style={{
                  margin: "0px 0 20px",
                  fontSize: "30px",
                  cursor: "pointer",
                  color: "rgb(229 70 70)",
                }}
                title="Home"
              />
            </Link>
          </Tooltip>

          <Tooltip label="Play Games" placement="right">
            <Link target="_blank" to="https://poki.com/en/online">
              <IoGameController
                style={{
                  margin: "0px 0 20px",
                  fontSize: "30px",
                  cursor: "pointer",
                  color: "rgb(229 70 70)",
                }}
                title="Play Games"
              />
            </Link>
          </Tooltip>

          <Tooltip label="Hear a joke" placement="right">
            <Link to="/hearAjoke">
              <FaFaceLaughBeam
                style={{
                  margin: "0px 0 20px",
                  fontSize: "30px",
                  cursor: "pointer",
                  color: "rgb(229 70 70)",
                }}
                title="Read Jokes"
              />
            </Link>
          </Tooltip>

          <Tooltip label="Chat with us" placement="right">
            <Link
              to="/chatbot"
              style={{
                margin: "0px 0 20px",
                fontSize: "30px",
                cursor: "pointer",
                color: "rgb(229 70 70)",
              }}
              title="Chatbot"
            >
              <BsFillChatRightDotsFill />
            </Link>
          </Tooltip>

          <Tooltip label="Recommendation" placement="right">
            <Link to="/recommendation">
              <FaBrain
                style={{
                  margin: "0px 0 20px",
                  fontSize: "30px",
                  cursor: "pointer",
                  color: "rgb(229 70 70)",
                }}
                title="Medical Recommendations"
              />
            </Link>
          </Tooltip>

          <Tooltip label="Doctors Near Me" placement="right">
            <Link to="/doctorsNearYou">
              <FaUserDoctor
                style={{
                  margin: "0px 0 20px",
                  fontSize: "30px",
                  cursor: "pointer",
                  color: "rgb(229 70 70)",
                }}
                title="Find doctors near you"
              />
            </Link>
          </Tooltip>
          <Tooltip label={user?.name} placement="right">
            <img
              src={user?.picture}
              height={40}
              width={40}
              alt={user?.name}
              style={{
                borderRadius: "50%",
              }}
            />
          </Tooltip>

          {isAuthenticated ? (
            <Tooltip label="Logout" placement="right">
              <span style={{ display: "inline-block" }} onClick={logout}>
                <FaArrowAltCircleLeft
                  style={{
                    fontSize: "30px",
                    cursor: "pointer",
                    color: "rgb(229 70 70)",
                    // marginRight: "20px", // Add margin-right for spacing
                    marginTop: "15px",
                  }}
                  title="Logout"
                />
              </span>
            </Tooltip>
          ) : (
            <p></p>
          )}
        </div>
      </Box>
    </Box>
  );
}

export default Navbar;
