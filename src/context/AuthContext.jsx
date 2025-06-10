import getAuthToken, { removeAuthToken } from "@/services/cookies";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  token: "",
  setToken: () => {},
  isLoggedIn: null,
  setIsLoggedIn: () => {},
  handleLogout: () => {},
  isLoading: true,
});

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(getAuthToken() || "");
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [token]);

  const handleLogout = () => {
    setToken("");
    setIsLoggedIn(false);
    removeAuthToken();
  };

  const value = {
    token,
    setToken,

    isLoggedIn,
    setIsLoggedIn,
    handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
export default AuthContextProvider;
