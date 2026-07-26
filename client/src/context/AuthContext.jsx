import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import API from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const token = localStorage.getItem("token");

    if (!token) return;

    try {
      const res = await API.get("/auth/me");

      setUser(res.data);
    } catch (error) {
      console.log(error);

      localStorage.removeItem("token");
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        fetchUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);