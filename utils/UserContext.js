import React, { createContext, useState } from "react";
export const User = createContext(null);

const UserContext = ({ children }) => {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users"))||[]);
  return <User.Provider value={[users, setUsers]}>{children}</User.Provider>;
};

export default UserContext;
