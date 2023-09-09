import Navbar from '../components/Common/Navbar';
import Main from '../components/ForChatbot/Main';
import { useAuth0 } from "@auth0/auth0-react";

function Chatbot() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <>
    {isAuthenticated ? (
      <div className="chatbot">
       <Navbar />
       <Main />
     </div>
    ) : (
      <p>Please login <a href="/" style={{color:"blue"}}>here</a></p>
    )}
  </>
  )
}

export default Chatbot