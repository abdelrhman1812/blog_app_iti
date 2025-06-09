import endPoints from "@/config/endpoints";
import getRequest from "@/hooks/handleRequest/GetRequest";
import getAuthToken, { removeAuthToken } from "@/services/cookies";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  token: "",
  setToken: () => {},
  user: null,
  setUser: () => {},
  isLoggedIn: null,
  setIsLoggedIn: () => {},
  handleLogout: () => {},
  isLoading: true,
});

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(getAuthToken() || "");
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const { data } = await getRequest(endPoints.userProfile, token);
          setUser(data.data);
          setIsLoggedIn(true);
        } catch (error) {
          console.error("Failed to fetch user:", error);
          setUser(null);
          setIsLoggedIn(false);
        } finally {
          setIsLoading(false);
        }
      };
      getUser();
    } else {
      setUser(null);
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  }, [token]);

  const handleLogout = () => {
    setToken("");
    setUser(null);
    setIsLoggedIn(false);
    removeAuthToken();
  };

  const value = {
    token,
    setToken,
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    handleLogout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
export default AuthContextProvider;
