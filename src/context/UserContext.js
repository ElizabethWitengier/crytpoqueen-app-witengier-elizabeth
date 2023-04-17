import { createContext, useState, useContext, useEffect } from "react";

// Create a context
const UserContext = createContext();

// Creating a custom hook for using the context
export const useUserContext = () => useContext(UserContext);

// Creating the Provider Function
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let getUser = localStorage.getItem("user");
    getUser = getUser ? JSON.parse(getUser) : null;
    if (getUser) {
      setUser(getUser);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
