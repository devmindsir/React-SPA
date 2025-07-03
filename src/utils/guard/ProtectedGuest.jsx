import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";

function ProtectedGuest({ children }) {
  const { user } = useContext(UserContext);

  if (user) {
    return <Navigate to={"/dashboard"} />;
  }

  return children;
}

export default ProtectedGuest;
