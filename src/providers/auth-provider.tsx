/** @format */

import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "@tanstack/react-router";

export type AuthContextType = {
  token: string | null;
  setToken: (token: string) => void;
  resetToken: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  //
  const [token, _setToken] = useState<string | null>(
    () => Cookies.get("token") || null
  );

  const navigate = useNavigate();

  //
  const setToken = (token: string) => {
    Cookies.set("token", token, { expires: 7 });
    _setToken(token);
    navigate({ to: "/dashboard", replace: true });
  };

  //
  const resetToken = () => {
    Cookies.remove("token");
    _setToken(null);
    navigate({ to: "/sign-in", replace: true });
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        resetToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
