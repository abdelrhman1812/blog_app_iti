import getAuthToken, { removeAuthToken } from "@/services/cookies";
import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  token: "",
  setToken: () => {},
  isLoggedIn: null,
  setIsLoggedIn: () => {},
  handleLogout: () => {},
  isLoading: true,
  user: null,
});

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(getAuthToken() || "");
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded?.user || decoded);
        setIsLoggedIn(true);
      } catch (err) {
        console.error(err || "Invalid token");
        setUser(null);
        setIsLoggedIn(false);
      }
    } else {
      setUser(null);
      setIsLoggedIn(false);
    }
  }, [token]);

  const handleLogout = () => {
    setToken("");
    setUser(null);
    removeAuthToken();
    setIsLoggedIn(false);
  };

  const value = {
    token,
    setToken,
    isLoggedIn,
    setIsLoggedIn,
    handleLogout,
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
export default AuthContextProvider;
