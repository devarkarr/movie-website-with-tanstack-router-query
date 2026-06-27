/** @format */

import { createContext, useContext, useReducer } from "react";
import Cookies from "js-cookie";

export type AuthContextType = {
  token: string | null;
};

export type AuthContextActionType = {
  type: "SET_TOKEN" | "RESET_TOKEN";
  payload: string | null;
};

const AuthContext = createContext<
  | {
      state: AuthContextType;
      dispatch: React.Dispatch<AuthContextActionType>;
    }
  | undefined
>(undefined);

// actions
function authReducer(state: AuthContextType, action: AuthContextActionType) {
  switch (action.type) {
    case "SET_TOKEN":
      Cookies.set("token", action.payload ?? "", { expires: 7 });
      return { ...state, token: action.payload };

    case "RESET_TOKEN":
      Cookies.remove("token");
      return { ...state, token: null };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, {
    token: Cookies.get("token") ?? null,
  });

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// custom 
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
