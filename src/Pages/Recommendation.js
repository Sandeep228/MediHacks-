import Main from '../components/ForRecommendation/Main';
import Navbar from '../components/Common/Navbar';
import { useAuth0 } from "@auth0/auth0-react";

function Recommendation() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <>
      {isAuthenticated ? (
         <div className="recommendation">
         <Navbar />
         <Main />
       </div>
      ) : (
        <p>Please login <a href="/" style={{color:"blue"}}>here</a></p>
      )}
    </>
  )
}

export default Recommendation