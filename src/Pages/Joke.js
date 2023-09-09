import Main from '../components/ForJokes/Main';
import Navbar from '../components/Common/Navbar';
import { useAuth0 } from "@auth0/auth0-react";

function Joke() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <>
    {isAuthenticated ? (
       <div className="joke">
       <Navbar />
       <Main />
     </div>
    ) : (
      <p>Please login <a href="/" style={{color:"blue"}}>here</a></p>
    )}
  </>
  )
}

export default Joke