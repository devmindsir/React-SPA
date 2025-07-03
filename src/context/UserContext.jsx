import { createContext, useState } from "react";
import users from "../data/users";

export const UserContext = createContext();
function UserProvider({ children }) {
  const savedUser = localStorage.getItem("user");
  const getUser = savedUser ? JSON.parse(savedUser) : null;
  const [user, setUser] = useState(getUser);
  const login = (email, password) => {
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (foundUser) {
      const userInfo = {
        id: foundUser.id,
        name: foundUser.name,
        avatar: foundUser.avatar,
        purchasedCourses: foundUser.purchasedCourses,
      };
      setUser(userInfo);
      localStorage.setItem("user", JSON.stringify(userInfo));
      return { success: true };
    } else {
      return { success: false, message: "ایمیل یا پسوورد اشتباه است" };
    }
  };
  const logOut = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ login, user, logOut }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
