/** @format */

import { create } from "zustand";
import Cookies from "js-cookie";

export type AuthState = {
  token: string | null;
  setToken: (token: string) => void;
  resetToken: () => void;
};

export const useAuth = create<AuthState>((set) => {
  const token = Cookies.get("token") || null;

  return {
    token: token,
    setToken: (token: string) => {
      Cookies.set("token", token, { expires: 7 });

      return set({
        token,
      });
    },
    resetToken: () => {
      Cookies.remove("token");
      return set({ token: null });
    },
  };
});
