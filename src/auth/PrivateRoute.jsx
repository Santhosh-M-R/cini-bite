import { auth } from "../firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <div>
        <p>Loading.....</p>
      </div>
    );
  }

  if (error) {
    return <p>Error in loading the page....</p>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to={"/cini-bite/signin"} />;
  }
};

export default PrivateRoute;
