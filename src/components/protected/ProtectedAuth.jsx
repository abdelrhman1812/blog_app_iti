import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../shared/LoadingSpinner";

const ProtectedAuth = ({ children }) => {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isLoggedIn === true) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedAuth;
