import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";

function ProtectedUser({ children }) {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return children;
}

export default ProtectedUser;
