import React, { useState, createContext } from "react";

export const AuthContext = createContext();
export const DispatchAuthContext = React.createContext();

export const AuthContextProvider = props => {
  const [isAuth, setAuth] = useState(false);

  return (
    <DispatchAuthContext.Provider value={setAuth}>
      <AuthContext.Provider value={isAuth}>
        {props.children}
      </AuthContext.Provider>
    </DispatchAuthContext.Provider>
  );
};
